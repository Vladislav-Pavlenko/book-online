import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@api/prisma/prisma';

export async function POST(req: NextRequest) {
  try {
    const { email, code } = await req.json();

    if (!email || !code) {
      return NextResponse.json({ error: 'Missing data' }, { status: 400 });
    }

    const user = await prisma.user.findFirst({
      where: {
        email: email,
        resetToken: code,
        resetTokenExpiry: { gt: new Date() },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Incorrect code or expiration date' },
        { status: 400 }
      );
    }

    return NextResponse.json({ valid: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}
