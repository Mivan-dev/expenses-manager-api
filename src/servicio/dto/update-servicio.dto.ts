import { EtiquetaCredencial } from '@prisma/client';
import {
  IsEnum,
  IsOptional,
  IsString,
  IsBoolean,
  MaxLength,
} from 'class-validator';
import { ServicioDto } from './servicio.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateServicioDto extends PartialType(ServicioDto) {
  @IsOptional()
  @IsBoolean({ message: 'pagado debe ser verdadero o falso' })
  pagado?: boolean;

  @IsOptional()
  @IsEnum(EtiquetaCredencial, { message: 'La etiqueta 1 no es válida' })
  etiqueta1?: EtiquetaCredencial | null;

  @IsOptional()
  @IsString({ message: 'El valor 1 debe ser texto' })
  @MaxLength(50, { message: 'El valor 1 no puede superar los 50 caracteres' })
  valor1?: string | null;

  @IsOptional()
  @IsEnum(EtiquetaCredencial, { message: 'La etiqueta 2 no es válida' })
  etiqueta2?: EtiquetaCredencial | null;

  @IsOptional()
  @IsString({ message: 'El valor 2 debe ser texto' })
  @MaxLength(50, { message: 'El valor 2 no puede superar los 50 caracteres' })
  valor2?: string | null;
}
