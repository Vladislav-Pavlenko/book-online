import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken } from '@api/utils/auth';
import { prisma } from '@api/prisma/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
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
    const favorite = await prisma.like.findUnique({
      where: {
        userId_bookId: {
          userId: user.id,
          bookId,
        },
      },
    });

    if (!favorite) {
      return NextResponse.json({ isLike: false });
    }

    return NextResponse.json({ isLike: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
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
    const existing = await prisma.like.findUnique({
      where: { userId_bookId: { userId: user.id, bookId } },
    });

    if (existing) {
      await prisma.like.delete({
        where: {
          userId_bookId: {
            userId: user.id,
            bookId,
          },
        },
      });

      return NextResponse.json({ isLike: false });
    }

    await prisma.like.create({
      data: {
        userId: user.id,
        bookId,
      },
    });

    return NextResponse.json({ isLike: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
