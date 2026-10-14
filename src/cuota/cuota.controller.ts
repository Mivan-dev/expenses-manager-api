import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CuotaService } from './cuota.service';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';
import { CuotaDto } from './dto/cuota.dto';

type ReqUser = { user: { id: string; email: string } };

@UseGuards(JwtGuard)
@Controller('cuota')
export class CuotaController {
  constructor(private cuotaService: CuotaService) {}

  @Post()
  async create(@Body() data: CuotaDto, @Req() req: ReqUser) {
    await this.verificarTarjeta(data.tarjetaId, req.user.id);
    return this.cuotaService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: CuotaDto,
    @Req() req: ReqUser,
  ) {
    await this.verificarCuota(id, req.user.id);
    await this.verificarTarjeta(data.tarjetaId, req.user.id);
    return this.cuotaService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Req() req: ReqUser) {
    await this.verificarCuota(id, req.user.id);
    return this.cuotaService.delete(id);
  }
  private async verificarTarjeta(tarjetaId: string, usuarioId: string) {
    const tarjeta = await this.cuotaService.findTarjeta(tarjetaId);
    if (!tarjeta) throw new NotFoundException('Tarjeta no encontrada');
    if (tarjeta.usuarioId !== usuarioId) throw new ForbiddenException();
  }

  private async verificarCuota(cuotaId: string, usuarioId: string) {
    const cuota = await this.cuotaService.findOneConTarjeta(cuotaId);
    if (!cuota) throw new NotFoundException('Cuota no encontrada');
    if (cuota.tarjeta.usuarioId !== usuarioId) throw new ForbiddenException();
  }
}
