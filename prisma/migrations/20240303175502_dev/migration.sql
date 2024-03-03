/*
  Warnings:

  - You are about to drop the column `touristicId` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `activities` table. All the data in the column will be lost.
  - You are about to drop the column `touristicId` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `destiniesId` on the `touristics` table. All the data in the column will be lost.
  - Added the required column `touristic_id` to the `activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `activities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `touristic_id` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destinies_id` to the `touristics` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "activities" DROP CONSTRAINT "activities_touristicId_fkey";

-- DropForeignKey
ALTER TABLE "activities" DROP CONSTRAINT "activities_userId_fkey";

-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_touristicId_fkey";

-- DropForeignKey
ALTER TABLE "touristics" DROP CONSTRAINT "touristics_destiniesId_fkey";

-- AlterTable
ALTER TABLE "activities" DROP COLUMN "touristicId",
DROP COLUMN "userId",
ADD COLUMN     "touristic_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "images" DROP COLUMN "touristicId",
ADD COLUMN     "touristic_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "touristics" DROP COLUMN "destiniesId",
ADD COLUMN     "destinies_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "touristics" ADD CONSTRAINT "touristics_destinies_id_fkey" FOREIGN KEY ("destinies_id") REFERENCES "destinies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_touristic_id_fkey" FOREIGN KEY ("touristic_id") REFERENCES "touristics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_touristic_id_fkey" FOREIGN KEY ("touristic_id") REFERENCES "touristics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "activities_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
