import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TarjetaService } from './tarjeta.service';

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
