import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { TarjetaService } from './tarjeta.service';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';

@UseGuards(JwtGuard)
@Controller('tarjeta')
export class TarjetaController {
    constructor(private tarjetaService: TarjetaService){}

    @Get()
    findAll(){
        return this.tarjetaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.tarjetaService.findOne(id);
    }

    @Post()
    create(@Body() data: {nombre: string, monto: number, vencimiento: string, empresaId: string}){
        return this.tarjetaService.create(data)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: {nombre: string, monto: number, vencimiento: string, empresaId: string}){
        return this.tarjetaService.update(id, data)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.tarjetaService.delete(id)
    }
}
