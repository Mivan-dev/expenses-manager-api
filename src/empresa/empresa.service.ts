import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmpresaService {
    constructor (private prisma: PrismaService){}

    findAll(){
        return this.prisma.empresa.findMany();
    }

    findOne(id: string){
        return this.prisma.empresa.findUnique({
            where: { id }
        });
    }

    create(data: {nombre: string, icono: string}){
        return this.prisma.empresa.create({data});
    }

    update(id: string, data: {nombre: string, icono: string}){
        return this.prisma.empresa.update({
            where: {id},
            data
        });
    }

    delete(id: string){
        return this.prisma.empresa.delete({
            where: {id}
        });
    }
}
