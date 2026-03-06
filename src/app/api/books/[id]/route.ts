import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken } from '@api/utils/auth';
import { prisma } from '@api/prisma/prisma';

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

    const { pathname } = new URL(req.url);
    const id = pathname.split('/').pop()!;
    if (!id) NextResponse.json({ error: 'Invalid book ID' }, { status: 400 });

    const book = await prisma.book.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
        coverData: true,
        user: { select: { fullName: true } }, // хто додав книгу
        authors: { include: { author: true } },
        categories: { include: { category: true } },
        comments: { select: { rating: true } },
      },
    });

    if (!book)
      return NextResponse.json({ error: 'Book not found' }, { status: 404 });

    const ratings = book.comments
      .map((c) => c.rating)
      .filter((r) => r !== null) as number[];
    const averageRating =
      ratings.length > 0
        ? Number(
            (ratings.reduce((a, r) => a + r, 0) / ratings.length).toFixed(1)
          )
        : 0;

    const coverData = book.coverData
      ? `data:image/jpeg;base64,${Buffer.from(book.coverData).toString('base64')}`
      : null;

    const progress = await prisma.readingProgress.findUnique({
      where: { userId_bookId: { userId: user.id, bookId: id } },
      select: { currentPage: true, totalPages: true, isFinished: true },
    });

    return NextResponse.json({
      message: 'Book fetched successfully',
      book: {
        id: book.id,
        title: book.title,
        description: book.description,
        coverData,
        authors: book.authors.map((a) => a.author),
        categories: book.categories.map((c) => c.category),
        addedBy: book.user,
        averageRating,
        progress: progress || {
          currentPage: 0,
          totalPages: null,
        },
        commentsCount: book.comments.length,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
