import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsOptional } from 'class-validator';
import { TarjetaDto } from './tarjeta.dto';

export class UpdateTarjetaDto extends PartialType(TarjetaDto) {
  @IsOptional()
  @IsBoolean({ message: 'pagado debe ser verdadero o falso' })
  pagado?: boolean;
}
