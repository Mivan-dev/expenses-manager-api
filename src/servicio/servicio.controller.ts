import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ServicioService } from './servicio.service';

@Controller('servicio')
export class ServicioController {
    constructor(private servicioService: ServicioService){}

    @Get()
    findAll(){
        return this.servicioService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.servicioService.findOne(id)
    }

    @Post()
    create(@Body() data:{
    nombre: string;
    monto: number;
    vencimiento: string;
    empresaId: string;
  }){
    return this.servicioService.create(data)
  }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: {
    nombre: string;
    monto: number;
    vencimiento: string;
    empresaId: string;
  }){
    return this.servicioService.update(id, data)
  }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.servicioService.delete(id)
    }
}
