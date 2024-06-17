-- CreateTable
CREATE TABLE "criminosos" (
    "cpf" VARCHAR(11) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "data_nascimento" TIMESTAMP NOT NULL,
    "endereco" VARCHAR(255) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "criminosos_cpf_key" ON "criminosos"("cpf");
