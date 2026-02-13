/*
  Warnings:

  - You are about to drop the column `coverUrl` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `fileUrl` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Author` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "coverUrl",
DROP COLUMN "fileUrl",
ADD COLUMN     "coverData" BYTEA,
ADD COLUMN     "fileData" BYTEA;

-- CreateIndex
CREATE UNIQUE INDEX "Author_name_key" ON "Author"("name");
