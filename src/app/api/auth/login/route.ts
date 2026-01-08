import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@api/prisma/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { LoginSchema } from '@api/types/schemas';
import { User } from '@api/types/user';
import { Validate } from '@api/utils/validation';
import { JWT_SECRET } from '@api/constants';

export async function POST(req: NextRequest) {
  try {
    const body: User = await req.json();
    const validation = Validate(LoginSchema, body);

    if (!validation.success) {
      return NextResponse.json({ errors: validation.errors }, { status: 400 });
    }

    const data = validation.data!;

    const user = await prisma.user.findUnique({ where: { email: data.email } });
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const isValid = await bcrypt.compare(data.password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    if (!JWT_SECRET) {
      return NextResponse.json(
        { error: 'JWT_SECRET is not defined in .env' },
        { status: 500 }
      );
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '7d',
    });
    const res = NextResponse.json({ message: 'Login successful' });
    res.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });

    return res;
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
