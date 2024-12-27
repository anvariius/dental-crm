/*
  Warnings:

  - You are about to drop the `Appointments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Patients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Services` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Appointments";

-- DropTable
DROP TABLE "Patients";

-- DropTable
DROP TABLE "Services";

-- CreateTable
CREATE TABLE "patients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "passport" TEXT,
    "birthday" TEXT,
    "gender" "Gender",
    "status" "Status" NOT NULL,

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointments" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "status" "AppointmentStatus" NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);
