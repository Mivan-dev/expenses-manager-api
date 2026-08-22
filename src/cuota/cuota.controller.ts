import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CuotaService } from './cuota.service';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';

@UseGuards(JwtGuard)
@Controller('cuota')
export class CuotaController {
  constructor(private cuotaService: CuotaService) {}

  @Post()
  create(
    @Body()
    data: {
      nombre: string;
      cuotaActual: number;
      cuotaBase: number;
      cuotaTotal: number;
      monto: number;
      fechaCarga: string;
      tarjetaId: string;
    },
  ) {
    return this.cuotaService.create(data);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    data: {
      nombre: string;
      cuotaActual: number;
      cuotaBase: number;
      cuotaTotal: number;
      monto: number;
      fechaCarga: string;
      tarjetaId: string;
    },
  ){
    return this.cuotaService.update(id, data)
  }

  @Delete(':id')
  delete(@Param('id') id: string){
    return this.cuotaService.delete(id)
  }
}
