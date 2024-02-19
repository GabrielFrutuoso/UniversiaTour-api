/*
  Warnings:

  - Added the required column `localMaps` to the `destinies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `destinies` ADD COLUMN `localMaps` VARCHAR(500) NOT NULL;
