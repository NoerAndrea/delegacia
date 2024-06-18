-- CreateEnum
CREATE TYPE "TipoArma" AS ENUM ('Branca', 'Fogo');

-- CreateTable
CREATE TABLE "armas" (
    "id" UUID NOT NULL,
    "tipo" "TipoArma" NOT NULL,
    "calibre" SMALLINT,
    "numeracao" INTEGER,
    "descricao" VARCHAR(255) NOT NULL,

    CONSTRAINT "armas_pkey" PRIMARY KEY ("id")
);
