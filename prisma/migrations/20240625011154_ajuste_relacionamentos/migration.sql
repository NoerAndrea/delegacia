/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `armas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `crimes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `crime_id` to the `armas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `criminoso_cpf` to the `crimes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "armas" ADD COLUMN     "crime_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "crimes" ADD COLUMN     "criminoso_cpf" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "criminosos" ADD CONSTRAINT "criminosos_pkey" PRIMARY KEY ("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "armas_id_key" ON "armas"("id");

-- CreateIndex
CREATE UNIQUE INDEX "crimes_id_key" ON "crimes"("id");

-- AddForeignKey
ALTER TABLE "crimes" ADD CONSTRAINT "crimes_criminoso_cpf_fkey" FOREIGN KEY ("criminoso_cpf") REFERENCES "criminosos"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "armas" ADD CONSTRAINT "armas_crime_id_fkey" FOREIGN KEY ("crime_id") REFERENCES "crimes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
