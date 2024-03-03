-- CreateEnum
CREATE TYPE "role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" VARCHAR(500),
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
    "best_season" VARCHAR(500) NOT NULL,
    "weather" VARCHAR(500) NOT NULL,
    "local_maps" VARCHAR(500) NOT NULL,
    "description" VARCHAR(2000) NOT NULL,
    "image_url" VARCHAR(500) NOT NULL,

    CONSTRAINT "destinies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "touristics" (
    "id" SERIAL NOT NULL,
    "location" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "local_maps" VARCHAR(500) NOT NULL,
    "description" VARCHAR(2000) NOT NULL,
    "destinies_id" INTEGER NOT NULL,

    CONSTRAINT "touristics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" SERIAL NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "touristic_id" INTEGER NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activities" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "touristic_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "activities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "touristics" ADD CONSTRAINT "touristics_destinies_id_fkey" FOREIGN KEY ("destinies_id") REFERENCES "destinies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_touristic_id_fkey" FOREIGN KEY ("touristic_id") REFERENCES "touristics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_touristic_id_fkey" FOREIGN KEY ("touristic_id") REFERENCES "touristics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
