import { JWT_SECRET } from '@api/constants';
import jwt from 'jsonwebtoken';
import { prisma } from '@api/prisma/prisma';

export async function getUserFromToken(token: string) {
  if (!token) return null;
  try {
    if (!JWT_SECRET) throw new Error('JWT_SECRET not defined');

    const payload = jwt.verify(token, JWT_SECRET) as { userId: string };
    if (!payload?.userId) return null;

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });

    return user || null;
  } catch (err) {
    console.error('Invalid token', err);
    return null;
  }
}
