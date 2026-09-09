import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService){}

    @Post()
    create(@Body() data: {nombre: string; email: string; password: string}){
        return this.usuarioService.create(data)
    }

    // METODO PARA BORRAR USUARIO - SOLO HABILITAR PARA BORRAR Y LUEGO DESABILITAR.
    // SE CREARA UN USUARIO ADMIN PARA ESTAS OPERACIONES EN UN FUTURO
    // @Delete(':id')
    // delete(@Param('id') id: string){
    //     return this.usuarioService.delete(id);
    // }
}
