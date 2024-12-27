/*
  Warnings:

  - You are about to drop the column `lastLogin` on the `employees` table. All the data in the column will be lost.
  - Added the required column `lastAuth` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `login` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employees" DROP COLUMN "lastLogin",
ADD COLUMN     "lastAuth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "login" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;
