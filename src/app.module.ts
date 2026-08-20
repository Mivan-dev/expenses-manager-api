import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EmpresaModule } from './empresa/empresa.module';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { CuotaModule } from './cuota/cuota.module';

@Module({
  imports: [PrismaModule, EmpresaModule, TarjetaModule, CuotaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
