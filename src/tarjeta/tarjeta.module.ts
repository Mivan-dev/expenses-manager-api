import { Module } from '@nestjs/common';
import { TarjetaService } from './tarjeta.service';
import { TarjetaController } from './tarjeta.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TarjetaService],
  controllers: [TarjetaController]
})
export class TarjetaModule {}
