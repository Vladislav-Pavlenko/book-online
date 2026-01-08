// import { prisma } from '../prisma/prisma'
// import { Book } from '../types/book'
//
// export async function GET(req: Request) {
//   try {
//     const books = await prisma.book.findMany({ include: {} })
//     return new Response(JSON.stringify(books), {
//       status: 200,
//       headers: { 'Content-type': 'application/json' },
//     })
//   } catch (err) {}
// }
