/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `employees` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "employees_login_password_key";

-- CreateIndex
CREATE UNIQUE INDEX "employees_login_key" ON "employees"("login");
