import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CuotaService {
  constructor(private prisma: PrismaService) {}

  create(data: {
    nombre: string;
    cuotaActual: number;
    cuotaBase: number;
    cuotaTotal: number;
    monto: number;
    fechaCarga: string;
    tarjetaId: string;
  }) {
    return this.prisma.cuota.create({ data });
  }

  update(
    id: string,
    data: {
      nombre: string;
      cuotaActual: number;
      cuotaBase: number;
      cuotaTotal: number;
      monto: number;
      fechaCarga: string;
      tarjetaId: string;
    },
  ){
    return this.prisma.cuota.update({
        where: { id },
        data
    })
  }

  delete(id: string) {
    return this.prisma.cuota.delete({
        where: { id }
    })
  }
}
