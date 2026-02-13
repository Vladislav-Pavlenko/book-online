/*
  Warnings:

  - You are about to drop the column `producerId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `producerName` on the `Book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_producerId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "producerId",
DROP COLUMN "producerName",
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
