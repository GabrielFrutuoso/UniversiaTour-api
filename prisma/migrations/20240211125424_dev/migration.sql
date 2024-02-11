/*
  Warnings:

  - Added the required column `description` to the `destinies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `destinies` ADD COLUMN `description` VARCHAR(2000) NOT NULL;
