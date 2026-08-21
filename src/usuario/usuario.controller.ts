import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService){}

    @Post()
    create(@Body() data: {nombre: string; email: string; password: string}){
        return this.usuarioService.create(data)
    }
}
