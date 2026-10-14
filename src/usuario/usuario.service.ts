import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async create(data: { nombre: string; email: string; password: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    try {
      return await this.prisma.usuario.create({
        data: { ...data, password: hashedPassword },
        omit: { password: true },
      });
    } catch (error) {
      if ((error as { code?: string }).code === 'P2002') {
        throw new ConflictException('El email ya está registrado');
      }
      throw error;
    }
  }

  findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  // METODO PARA BORRAR USUARIO - SOLO HABILITAR PARA BORRAR Y LUEGO DESABILITAR.
  // SE CREARA UN USUARIO ADMIN PARA ESTAS OPERACIONES EN UN FUTURO
  // delete(id: string){
  //   return this.prisma.usuario.delete({
  //     where: { id },
  //   })
  // }
}
