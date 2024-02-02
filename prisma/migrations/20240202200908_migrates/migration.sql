/*
  Warnings:

  - Added the required column `localMaps` to the `touristics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `touristics` ADD COLUMN `localMaps` VARCHAR(500) NOT NULL;
