import { Module } from '@nestjs/common';
import { TarjetaService } from './tarjeta.service';
import { TarjetaController } from './tarjeta.controller';

@Module({
  providers: [TarjetaService],
  controllers: [TarjetaController]
})
export class TarjetaModule {}
