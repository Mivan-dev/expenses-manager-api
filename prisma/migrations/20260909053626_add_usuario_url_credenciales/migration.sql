/*
  Warnings:

  - Added the required column `url` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Servicio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Tarjeta` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EtiquetaCredencial" AS ENUM ('NUMERO_CLIENTE', 'NUMERO_CONTRATO', 'NUMERO_CUENTA', 'UF', 'NUMERO', 'IDENTIFICADOR');

-- AlterTable
ALTER TABLE "Empresa" ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Servicio" ADD COLUMN     "etiqueta1" "EtiquetaCredencial",
ADD COLUMN     "etiqueta2" "EtiquetaCredencial",
ADD COLUMN     "usuarioId" TEXT NOT NULL,
ADD COLUMN     "valor1" TEXT,
ADD COLUMN     "valor2" TEXT;

-- AlterTable
ALTER TABLE "Tarjeta" ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Tarjeta" ADD CONSTRAINT "Tarjeta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servicio" ADD CONSTRAINT "Servicio_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
