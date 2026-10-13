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
import { ServicioService } from './servicio.service';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';
import { ServicioDto } from './dto/servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';

@UseGuards(JwtGuard)
@Controller('servicio')
export class ServicioController {
  constructor(private servicioService: ServicioService) {}

  @Get()
  findAll(@Req() req: { user: { id: string; email: string } }) {
    return this.servicioService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicioService.findOne(id);
  }

  @Post()
  create(
    @Body()
    data: ServicioDto,
    @Req() req: { user: { id: string; email: string } },
  ) {
    const dataCompleta = { ...data, usuarioId: req.user.id };
    return this.servicioService.create(dataCompleta);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body()
    data: UpdateServicioDto,
    @Req() req: { user: { id: string; email: string } },
  ) {
    const servicio = await this.servicioService.findOne(id);
    if (req.user.id === servicio!.usuarioId) {
      return this.servicioService.update(id, data);
    } else {
      throw new ForbiddenException();
    }
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
    @Req() req: { user: { id: string; email: string } },
  ) {
    const servicio = await this.servicioService.findOne(id);
    if (req.user.id === servicio!.usuarioId) {
      return this.servicioService.delete(id);
    } else {
      throw new ForbiddenException();
    }
  }
}
