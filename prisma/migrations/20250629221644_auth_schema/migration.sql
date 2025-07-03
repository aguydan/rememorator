/*
  Warnings:

  - The primary key for the `Fridge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Friendship` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Meal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `allergens` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `dietaryRequirements` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `nutritionalContents` on the `Product` table. All the data in the column will be lost.
  - The primary key for the `ProductCategory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ProductFrequency` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ProductInRecipe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Recipe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `allergens` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `dietaryRequirements` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `nutritionalContents` on the `Recipe` table. All the data in the column will be lost.
  - The primary key for the `StoredProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `hash` on the `User` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_friendId_fkey";

-- DropForeignKey
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_userId_fkey";

-- DropForeignKey
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_fridgeId_fkey";

-- DropForeignKey
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "ProductFrequency" DROP CONSTRAINT "ProductFrequency_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductFrequency" DROP CONSTRAINT "ProductFrequency_userId_fkey";

-- DropForeignKey
ALTER TABLE "ProductInRecipe" DROP CONSTRAINT "ProductInRecipe_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductInRecipe" DROP CONSTRAINT "ProductInRecipe_recipeId_fkey";

-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_userId_fkey";

-- DropForeignKey
ALTER TABLE "StoredProduct" DROP CONSTRAINT "StoredProduct_fridgeId_fkey";

-- DropForeignKey
ALTER TABLE "StoredProduct" DROP CONSTRAINT "StoredProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_fridgeId_fkey";

-- AlterTable
ALTER TABLE "Fridge" DROP CONSTRAINT "Fridge_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Fridge_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Fridge_id_seq";

-- AlterTable
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_pkey",
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "friendId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Friendship_pkey" PRIMARY KEY ("userId", "friendId");

-- AlterTable
ALTER TABLE "Meal" DROP CONSTRAINT "Meal_pkey",
ALTER COLUMN "fridgeId" SET DATA TYPE TEXT,
ALTER COLUMN "recipeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Meal_pkey" PRIMARY KEY ("fridgeId", "recipeId");

-- AlterTable
ALTER TABLE "Product" DROP CONSTRAINT "Product_pkey",
DROP COLUMN "allergens",
DROP COLUMN "dietaryRequirements",
DROP COLUMN "nutritionalContents",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "categoryId" DROP NOT NULL,
ALTER COLUMN "categoryId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Product_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Product_id_seq";

-- AlterTable
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ProductCategory_id_seq";

-- AlterTable
ALTER TABLE "ProductFrequency" DROP CONSTRAINT "ProductFrequency_pkey",
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProductFrequency_pkey" PRIMARY KEY ("userId", "productId");

-- AlterTable
ALTER TABLE "ProductInRecipe" DROP CONSTRAINT "ProductInRecipe_pkey",
ALTER COLUMN "recipeId" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ProductInRecipe_pkey" PRIMARY KEY ("recipeId", "productId");

-- AlterTable
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_pkey",
DROP COLUMN "allergens",
DROP COLUMN "dietaryRequirements",
DROP COLUMN "nutritionalContents",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Recipe_id_seq";

-- AlterTable
ALTER TABLE "StoredProduct" DROP CONSTRAINT "StoredProduct_pkey",
ALTER COLUMN "fridgeId" SET DATA TYPE TEXT,
ALTER COLUMN "productId" SET DATA TYPE TEXT,
ADD CONSTRAINT "StoredProduct_pkey" PRIMARY KEY ("fridgeId", "productId");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "hash",
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "image" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "fridgeId" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "Account" (
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "Session" (
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier","token")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_fridgeId_fkey" FOREIGN KEY ("fridgeId") REFERENCES "Fridge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoredProduct" ADD CONSTRAINT "StoredProduct_fridgeId_fkey" FOREIGN KEY ("fridgeId") REFERENCES "Fridge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StoredProduct" ADD CONSTRAINT "StoredProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFrequency" ADD CONSTRAINT "ProductFrequency_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFrequency" ADD CONSTRAINT "ProductFrequency_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_fridgeId_fkey" FOREIGN KEY ("fridgeId") REFERENCES "Fridge"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meal" ADD CONSTRAINT "Meal_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductInRecipe" ADD CONSTRAINT "ProductInRecipe_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductInRecipe" ADD CONSTRAINT "ProductInRecipe_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
