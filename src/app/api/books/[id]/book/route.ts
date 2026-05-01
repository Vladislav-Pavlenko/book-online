import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@api/prisma/prisma';
import { getUserFromToken } from '@api/utils/auth';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = req.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized: No token provided' },
        { status: 401 }
      );
    }

    const user = await getUserFromToken(token);
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized: Invalid token' },
        { status: 401 }
      );
    }

    const { id: bookId } = await params;

    const book = await prisma.book.findUnique({
      where: { id: bookId },
      select: { fileData: true, title: true },
    });

    if (!book?.fileData) {
      return NextResponse.json(
        { error: 'Book or file data not found' },
        { status: 404 }
      );
    }

    const buffer = book.fileData;
    let contentType = 'application/octet-stream';
    let ext = 'bin';

    const hexSignature = buffer.subarray(0, 4).toString().toUpperCase();

    if (hexSignature.startsWith('504B')) {
      contentType = 'application/epub+zip';
      ext = 'epub';
    } else if (hexSignature.startsWith('25504446')) {
      contentType = 'application/pdf';
      ext = 'pdf';
    }

    const safeFilename = encodeURIComponent(`${book.title}.${ext}`);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename*=UTF-8''${safeFilename}`,
      },
    });
  } catch (error) {
    console.error('[Book GET Error]:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
