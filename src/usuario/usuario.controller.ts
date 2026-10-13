import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  create(@Body() data: CreateUsuarioDto) {
    return this.usuarioService.create(data);
  }

  // METODO PARA BORRAR USUARIO - SOLO HABILITAR PARA BORRAR Y LUEGO DESABILITAR.
  // SE CREARA UN USUARIO ADMIN PARA ESTAS OPERACIONES EN UN FUTURO
  // @Delete(':id')
  // delete(@Param('id') id: string){
  //     return this.usuarioService.delete(id);
  // }
}
