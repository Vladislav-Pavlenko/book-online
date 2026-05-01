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
    const comments = await prisma.comment.findMany({
      where: { bookId },
      select: {
        id: true,
        content: true,
        rating: true,
        createdAt: true,
        user: { select: { fullName: true, avatarUrl: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    const safeComments = comments.map((c) => ({
      ...c,
      user: {
        ...c.user,
        avatarUrl: c.user.avatarUrl
          ? `data:image/jpeg;base64,${Buffer.from(c.user.avatarUrl).toString('base64')}`
          : null,
      },
    }));

    return NextResponse.json({ comments: safeComments });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}

export async function POST(
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
    const body = await req.json();

    if (!body?.text) {
      return NextResponse.json(
        { error: 'Comment content is required' },
        { status: 400 }
      );
    }

    const comment = await prisma.comment.create({
      data: {
        content: body.text,
        bookId,
        userId: user.id,
      },
      select: {
        id: true,
        content: true,
        rating: true,
        createdAt: true,
        user: {
          select: {
            fullName: true,
            avatarUrl: true,
          },
        },
      },
    });

    return NextResponse.json({ comment }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
