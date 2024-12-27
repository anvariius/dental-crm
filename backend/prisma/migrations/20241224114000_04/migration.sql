/*
  Warnings:

  - A unique constraint covering the columns `[login,password]` on the table `employees` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "employees_login_password_key" ON "employees"("login", "password");
