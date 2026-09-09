import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TarjetaService {
    constructor(private prisma: PrismaService){}

    findAll(usuarioId: string){
        return this.prisma.tarjeta.findMany({
            where: {usuarioId},
            include: { cuotas: true }
        })
    }

    findOne(id: string){
        return this.prisma.tarjeta.findUnique({
            where: { id },
            include: { cuotas: true }
        })
    }

    create(data: {nombre: string, monto: number, vencimiento: string, empresaId: string, usuarioId: string}){
        return this.prisma.tarjeta.create({data})
    }

    update(id: string, data: {nombre: string, monto: number, vencimiento: string, empresaId: string}){
        return this.prisma.tarjeta.update({
            where: { id },
            data
        })
    }

    delete(id: string){
        return this.prisma.tarjeta.delete({
            where: { id }
        })
    }
}
