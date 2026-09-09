import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TarjetaService } from './tarjeta.service';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';

@UseGuards(JwtGuard)
@Controller('tarjeta')
export class TarjetaController {
  constructor(private tarjetaService: TarjetaService) {}

  @Get()
  findAll(@Req() req: { user: { id: string; email: string } }) {
    return this.tarjetaService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tarjetaService.findOne(id);
  }

  @Post()
  create(
    @Body()
    data: {
      nombre: string;
      monto: number;
      vencimiento: string;
      empresaId: string;
    },
    @Req() req: { user: { id: string; email: string } },
  ) {
    const dataCompleta = { ...data, usuarioId: req.user.id };
    return this.tarjetaService.create(dataCompleta);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body()
    data: {
      nombre: string;
      monto: number;
      vencimiento: string;
      empresaId: string;
    },
    @Req() req: { user: { id: string; email: string } },
  ) {
    const tarjeta = await this.tarjetaService.findOne(id);
    if (req.user.id === tarjeta!.usuarioId) {
      return this.tarjetaService.update(id, data);
    } else {
      throw new ForbiddenException();
    }
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
    @Req() req: { user: { id: string; email: string } },
  ) {
    const tarjeta = await this.tarjetaService.findOne(id);
    if (req.user.id === tarjeta!.usuarioId) {
      return this.tarjetaService.delete(id);
    } else {
      throw new ForbiddenException();
    }
  }
}
