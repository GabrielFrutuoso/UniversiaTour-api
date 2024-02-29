-- CreateEnum
CREATE TYPE "role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" VARCHAR(200),
    "bio" TEXT,
    "tripInterests" VARCHAR(500),
    "birthday" TEXT NOT NULL,
    "role" "role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "destinies" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "bestSeason" VARCHAR(500) NOT NULL,
    "weather" VARCHAR(500) NOT NULL,
    "localMaps" VARCHAR(500) NOT NULL,
    "description" VARCHAR(2000) NOT NULL,
    "imageUrl" VARCHAR(500) NOT NULL,

    CONSTRAINT "destinies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "touristics" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "localMaps" VARCHAR(500) NOT NULL,
    "description" VARCHAR(2000) NOT NULL,
    "destiniesId" INTEGER NOT NULL,

    CONSTRAINT "touristics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "touristicId" INTEGER NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activities" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "touristicId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "touristics" ADD CONSTRAINT "touristics_destiniesId_fkey" FOREIGN KEY ("destiniesId") REFERENCES "destinies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_touristicId_fkey" FOREIGN KEY ("touristicId") REFERENCES "touristics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_touristicId_fkey" FOREIGN KEY ("touristicId") REFERENCES "touristics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
