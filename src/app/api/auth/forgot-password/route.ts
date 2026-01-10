import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@api/prisma/prisma';
import { sendResetCode } from '@api/utils/mail';
import { generateCode } from '@api/utils/generatorCode';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      console.log('Recovery attempt for non-existent email:', email);
      return NextResponse.json(
        { message: 'If this email exists, the code has been sent.' },
        { status: 200 }
      );
    }

    const code = generateCode();
    const expiryDate = new Date(Date.now() + 155 * 60 * 1000);

    await prisma.user.update({
      where: { email },
      data: { resetToken: code, resetTokenExpiry: expiryDate },
    });

    const isSent = await sendResetCode(email, code);
    if (!isSent) {
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'The code has been successfully sent to your email address.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Forgot password error: ', err);
    return NextResponse.json(
      {
        error: 'Something went wrong on the server',
      },
      { status: 500 }
    );
  }
}
