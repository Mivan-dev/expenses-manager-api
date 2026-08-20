import { Module } from '@nestjs/common';
import { CuotaService } from './cuota.service';
import { CuotaController } from './cuota.controller';

@Module({
  providers: [CuotaService],
  controllers: [CuotaController]
})
export class CuotaModule {}
