import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

export class TarjetaDto {
  @IsString({ message: 'El nombre es obligatorio' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre!: string;

  @IsNumber({}, { message: 'El monto debe ser un número' })
  @IsPositive({ message: 'El monto debe ser mayor a 0' })
  monto!: number;

  @IsDateString({}, { message: 'El vencimiento debe ser una fecha válida' })
  vencimiento!: string;

  @IsUUID('all', { message: 'La empresa no es válida' })
  empresaId!: string;
}
