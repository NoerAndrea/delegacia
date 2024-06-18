-- CreateEnum
CREATE TYPE "TipoCrime" AS ENUM ('Homicidio', 'Assalto', 'Trafico', 'Suborno');

-- CreateTable
CREATE TABLE "crimes" (
    "id" UUID NOT NULL,
    "tipo" "TipoCrime" NOT NULL,
    "data_crime" TIMESTAMP NOT NULL,
    "local" VARCHAR(255) NOT NULL,

    CONSTRAINT "crimes_pkey" PRIMARY KEY ("id")
);
