/*
  Warnings:

  - You are about to drop the column `localMaps` on the `touristics` table. All the data in the column will be lost.
  - Added the required column `local_maps` to the `touristics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "touristics" DROP COLUMN "localMaps",
ADD COLUMN     "local_maps" VARCHAR(500) NOT NULL;
