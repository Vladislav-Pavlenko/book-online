import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken } from '@api/utils/auth';
import { prisma } from '@api/prisma/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: bookId } = await params;
  const token = req.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await getUserFromToken(token);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const favorite = await prisma.favorite.findUnique({
      where: {
        userId_bookId: {
          userId: user.id,
          bookId,
        },
      },
    });

    if (!favorite) {
      return NextResponse.json({ isFavorite: false });
    }

    return NextResponse.json({ isFavorite: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: bookId } = await params;

  const token = req.cookies.get('token')?.value;
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const user = await getUserFromToken(token);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const existing = await prisma.favorite.findUnique({
      where: { userId_bookId: { userId: user.id, bookId } },
    });

    if (existing) {
      await prisma.favorite.delete({
        where: {
          userId_bookId: {
            userId: user.id,
            bookId,
          },
        },
      });

      return NextResponse.json({ isFavorite: false });
    }

    await prisma.favorite.create({
      data: {
        userId: user.id,
        bookId,
      },
    });

    return NextResponse.json({ isFavorite: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
