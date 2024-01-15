/*
  Warnings:

  - You are about to drop the column `bloods` on the `BloodBank` table. All the data in the column will be lost.
  - Added the required column `bags` to the `BloodBank` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BloodBank" DROP COLUMN "bloods",
ADD COLUMN     "bags" INTEGER NOT NULL;
