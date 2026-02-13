import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken } from '@api/utils/auth';
import { prisma } from '@api/prisma/prisma';
import { Validate } from '@api/utils/validation';
import { CreateBookSchema } from '@api/types/schemas';

export const runtime = 'nodejs';

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
      author: formData.get('author')?.toString(),
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

    const newBook = await prisma.book.create({
      data: {
        title: data.title,
        description: data.description,
        coverData,
        fileData,
        publishedAt: publishedAtDate,
        userId: user.id,
        authors: {
          create: {
            author: {
              connectOrCreate: {
                where: { name: data.author },
                create: { name: data.author },
              },
            },
          },
        },
        categories: {
          create: {
            category: {
              connectOrCreate: {
                where: { name: data.category },
                create: { name: data.category },
              },
            },
          },
        },
      },
    });

    return NextResponse.json({ message: 'Book created', book: newBook });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
