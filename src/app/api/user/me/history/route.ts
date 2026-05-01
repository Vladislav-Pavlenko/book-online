import { NextRequest, NextResponse } from 'next/server';
import { getUserFromToken } from '@api/utils/auth';
import { prisma } from '@api/prisma/prisma';

export const runtime = 'nodejs';

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

    const historyData = await prisma.readingProgress.findMany({
      where: { userId: user.id },
      orderBy: { updatedAt: 'desc' },
      include: {
        book: {
          select: {
            id: true,
            title: true,
            coverData: true,
            authors: {
              select: { author: { select: { id: true, name: true } } },
            },
            categories: {
              select: { category: { select: { name: true } } },
            },

            user: {
              select: { fullName: true },
            },
          },
        },
      },
    });

    const formattedHistory = historyData.map((item) => ({
      id: item.id,
      bookId: item.book.id,
      title: item.book.title,
      authors: item.book.authors.map((a) => a.author),
      genres: item.book.categories.map((c) => c.category.name),
      addedBy: item.book.user?.fullName || 'System',
      coverData: item.book.coverData
        ? `data:image/jpeg;base64,${Buffer.from(item.book.coverData).toString('base64')}`
        : null,
      updatedAt: item.updatedAt,
    }));

    return NextResponse.json({
      message: 'History fetched successfully',
      history: formattedHistory,
    });
  } catch (error) {
    console.error('History fetch error:', error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
