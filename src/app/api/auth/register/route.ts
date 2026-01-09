import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@api/prisma/prisma';
import { SALT_ROUNDS, JWT_SECRET } from '@api/constants';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '@api/types/user';
import { Validate } from '@api/utils/validation';
import { RegisterSchema } from '@api/types/schemas';

export async function POST(req: NextRequest) {
  try {
    const body: User = await req.json();
    const validation = Validate(RegisterSchema, body);

    if (!validation.success) {
      return NextResponse.json({ errors: validation.errors }, { status: 400 });
    }

    const data = validation.data!;
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

    const newUser = await prisma.user.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        password: hashedPassword,
      },
    });

    if (!JWT_SECRET) {
      return NextResponse.json(
        { error: 'JWT_SECRET is not defined in .env' },
        { status: 500 }
      );
    }

    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, {
      expiresIn: '7d',
    });

    const res = NextResponse.json({ message: 'User registered successfully' });
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
