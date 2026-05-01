import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken } from '@api/utils/auth';
import { prisma } from '@api/prisma/prisma';
import { Validate } from '@api/utils/validation';
import { CreateBookSchema } from '@api/types/schemas';
import { Prisma } from '@/generated/prisma';

type Filter = 'latest' | 'favorites' | 'rated' | 'recommended';

export const runtime = 'nodejs';

interface BookResponse {
  id: string;
  title: string;
  authors: { id: string; name: string }[];
  coverData: string | null;
  averageRating?: number;
}

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await getUserFromToken(token);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(req.url);
    const searchQuery = url.searchParams.get('q') || '';
    const filter = url.searchParams.get('filter' as Filter) || 'latest';
    const page = parseInt(url.searchParams.get('page') || '1');
    const pageSize = parseInt(url.searchParams.get('pageSize') || '10');

    const where: Prisma.BookWhereInput = searchQuery
      ? {
          OR: [
            { title: { contains: searchQuery, mode: 'insensitive' } },
            {
              authors: {
                some: {
                  author: {
                    name: { contains: searchQuery, mode: 'insensitive' },
                  },
                },
              },
            },
          ],
        }
      : {};

    if (filter === 'favorites') {
      where.favorites = { some: { userId: user.id } };
    }

    let books: BookResponse[] = [];
    let total = 0;

    if (filter === 'recommended') {
      const recentBooks = await prisma.book.findMany({
        where: {
          ...where,
        },
        select: {
          id: true,
          title: true,
          coverData: true,
          authors: { select: { author: { select: { id: true, name: true } } } },
        },
      });

      const bookIds = recentBooks.map((b) => b.id);

      const ratingGroups = await prisma.comment.groupBy({
        by: ['bookId'],
        _avg: { rating: true },
        where: { bookId: { in: bookIds } },
      });

      const ratingMap = new Map(
        ratingGroups.map((r) => [r.bookId, r._avg.rating ?? 0])
      );

      total = recentBooks.filter((b) => (ratingMap.get(b.id) ?? 0) >= 4).length;

      books = recentBooks
        .map((b) => ({
          id: b.id,
          title: b.title,
          authors: b.authors.map((a) => a.author),
          coverData: b.coverData
            ? `data:image/jpeg;base64,${Buffer.from(b.coverData).toString(
                'base64'
              )}`
            : null,
          averageRating: ratingMap.get(b.id) ?? 0,
        }))
        .filter((b) => b.averageRating >= 4 || b.averageRating === 0)
        .sort((a, b) => b.averageRating - a.averageRating)
        .slice((page - 1) * pageSize, page * pageSize);
    } else {
      let orderBy: Prisma.BookOrderByWithRelationInput = { createdAt: 'desc' };
      if (filter === 'rated') {
        orderBy = { createdAt: 'desc' };
      }

      const fetchedBooks = await prisma.book.findMany({
        where,
        select: {
          id: true,
          title: true,
          coverData: true,
          authors: {
            select: {
              author: { select: { id: true, name: true } },
            },
          },
          favorites:
            filter === 'favorites' ? { where: { userId: user.id } } : false,
        },
        orderBy,
        skip: (page - 1) * pageSize,
        take: pageSize,
      });

      total = await prisma.book.count({ where });

      books = fetchedBooks.map((b) => ({
        id: b.id,
        title: b.title,
        authors: b.authors.map((a) => a.author),
        coverData: b.coverData
          ? `data:image/jpeg;base64,${Buffer.from(b.coverData).toString(
              'base64'
            )}`
          : null,
      }));
    }

    return NextResponse.json({
      message: 'Books fetched successfully',
      total,
      page,
      pageSize,
      books,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await getUserFromToken(token);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();

    const payload = {
      title: formData.get('title')?.toString(),
      description: formData.get('description')?.toString(),
      authors: formData.get('author')?.toString(),
      category: formData.get('category')?.toString(),
      publishedAt: formData.get('publishedAt')?.toString(),
      cover: formData.get('cover') as File | null,
      file: formData.get('file') as File | null,
    };

    const validation = Validate(CreateBookSchema, payload);
    if (!validation.success) {
      return NextResponse.json({ errors: validation.errors }, { status: 400 });
    }

    const data = validation.data!;

    const coverFile = payload.cover;
    const bookFile = payload.file;

    const coverData = coverFile
      ? new Uint8Array(await coverFile.arrayBuffer())
      : undefined;
    const fileData = bookFile
      ? new Uint8Array(await bookFile.arrayBuffer())
      : undefined;

    const publishedAtDate = data.publishedAt
      ? (() => {
          const [day, month, year] = data.publishedAt.split('.');
          return new Date(
            Date.UTC(Number(year), Number(month) - 1, Number(day))
          );
        })()
      : undefined;

    const authorsArray = data.author.split(',').map((a) => a.trim());
    const categoriesArray = data.category.split(',').map((c) => c.trim());

    const newBook = await prisma.book.create({
      data: {
        title: data.title,
        description: data.description,
        coverData,
        fileData,
        publishedAt: publishedAtDate,
        userId: user.id,
        authors: {
          create: authorsArray.map((authorName) => ({
            author: {
              connectOrCreate: {
                where: { name: authorName },
                create: { name: authorName },
              },
            },
          })),
        },
        categories: {
          create: categoriesArray.map((categoryName) => ({
            category: {
              connectOrCreate: {
                where: { name: categoryName },
                create: { name: categoryName },
              },
            },
          })),
        },
      },
    });

    return NextResponse.json({ message: 'Book created', book: newBook });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
