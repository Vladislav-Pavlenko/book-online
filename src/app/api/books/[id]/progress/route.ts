import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@api/prisma/prisma';
import { getUserFromToken } from '@api/utils/auth';

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

  const body = await req.json();

  const currentPage = Number(body?.currentPage);

  if (Number.isNaN(currentPage)) {
    return NextResponse.json(
      { error: 'currentPage is required' },
      { status: 400 }
    );
  }

  const progress = await prisma.readingProgress.upsert({
    where: {
      userId_bookId: {
        userId: user.id,
        bookId,
      },
    },
    update: {
      currentPage,
      isFinished: body?.isFinished ?? false,
    },
    create: {
      userId: user.id,
      bookId,
      currentPage,
      isFinished: body?.isFinished ?? false,
    },
  });

  return NextResponse.json({ progress });
}
