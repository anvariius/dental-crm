-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('ALL', 'EMPLOYER', 'WATCH');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'REMOVED');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('NOTDONE', 'DONE', 'CANCELED');

-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT,
    "phone" TEXT,
    "permission" "Permission" NOT NULL,
    "lastLogin" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "passport" TEXT,
    "birthday" TEXT,
    "gender" "Gender",
    "status" "Status" NOT NULL,

    CONSTRAINT "Patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "status" "AppointmentStatus" NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);
