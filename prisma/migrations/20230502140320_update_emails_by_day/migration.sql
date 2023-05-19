/*
  Warnings:

  - You are about to drop the column `count` on the `emailsbyday` table. All the data in the column will be lost.
  - Added the required column `mailCount` to the `EmailsByDay` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `emailsbyday` DROP COLUMN `count`,
    ADD COLUMN `mailCount` INTEGER NOT NULL;
