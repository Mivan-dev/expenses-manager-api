import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';

@UseGuards(JwtGuard)
@Controller('empresa')
export class EmpresaController {
    constructor(private empresaService: EmpresaService){}

    @Get()
    findAll(){
        return this.empresaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.empresaService.findOne(id);
    }

    @Post()
    create(@Body() data: {nombre: string, icono: string}){
        return this.empresaService.create(data);
    }
    

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: {nombre: string, icono: string}){
        return this.empresaService.update(id, data);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
       return this.empresaService.delete(id)
    }
}

