import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@api/prisma/prisma';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  try {
    const { email, code, password } = await req.json();

    if (!email || !code || !password) {
      return NextResponse.json(
        { error: 'All fields (email, code, password) are required' },
        { status: 400 }
      );
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
        { error: 'Incorrect code or expired' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    return NextResponse.json(
      { message: 'Password changed successfully' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Reset password error', err);
    return NextResponse.json(
      { error: 'Server error when changing password' },
      { status: 500 }
    );
  }
}
