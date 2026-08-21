import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EmpresaModule } from './empresa/empresa.module';
import { TarjetaModule } from './tarjeta/tarjeta.module';
import { CuotaModule } from './cuota/cuota.module';
import { ServicioModule } from './servicio/servicio.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, EmpresaModule, TarjetaModule, CuotaModule, ServicioModule, UsuarioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
