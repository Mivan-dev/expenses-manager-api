import { Injectable } from '@nestjs/common';
import { EtiquetaCredencial } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicioService {
  constructor(private prisma: PrismaService) {}

  findAll(usuarioId: string) {
    return this.prisma.servicio.findMany({
      where: {usuarioId}
    });
  }
  findOne(id: string) {
    return this.prisma.servicio.findUnique({
      where: { id },
    });
  }
  create(data: {
    nombre: string;
    monto: number;
    vencimiento: string;
    empresaId: string;
    usuarioId: string;
  }) {
    return this.prisma.servicio.create({ data });
  }
  update(
    id: string,
    data: {
      nombre: string;
      monto: number;
      vencimiento: string;
      empresaId: string;
      etiqueta1?: EtiquetaCredencial;
      valor1?: string;
      etiqueta2?: EtiquetaCredencial;
      valor2?: string;
    },
  ) {
    return this.prisma.servicio.update({
      where: { id },
      data,
    });
  }
  delete(id: string) {
    return this.prisma.servicio.delete({
      where: { id },
    });
  }
}
