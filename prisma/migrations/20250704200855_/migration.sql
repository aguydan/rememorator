-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_fridgeId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "fridgeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_fridgeId_fkey" FOREIGN KEY ("fridgeId") REFERENCES "Fridge"("id") ON DELETE SET NULL ON UPDATE CASCADE;
