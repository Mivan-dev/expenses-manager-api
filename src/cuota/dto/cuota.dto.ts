import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  Min,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'cuotaActualMenorOIgual', async: false })
class CuotaActualMenorOIgual implements ValidatorConstraintInterface {
  validate(cuotaActual: number, args: ValidationArguments) {
    const { cuotaTotal } = args.object as CuotaDto;
    return typeof cuotaTotal !== 'number' || cuotaActual <= cuotaTotal;
  }

  defaultMessage() {
    return 'La cuota actual no puede ser mayor que la cuota total';
  }
}

export class CuotaDto {
  @IsString({ message: 'El nombre es obligatorio' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre!: string;

  @IsInt({ message: 'La cuota actual debe ser un número entero' })
  @Min(1, { message: 'La cuota actual debe ser al menos 1' })
  @Validate(CuotaActualMenorOIgual)
  cuotaActual!: number;

  @IsInt({ message: 'La cuota base debe ser un número entero' })
  @Min(1, { message: 'La cuota base debe ser al menos 1' })
  cuotaBase!: number;

  @IsInt({ message: 'La cuota total debe ser un número entero' })
  @Min(1, { message: 'La cuota total debe ser al menos 1' })
  cuotaTotal!: number;

  @IsNumber({}, { message: 'El monto debe ser un número' })
  @IsPositive({ message: 'El monto debe ser mayor a 0' })
  monto!: number;

  @IsDateString({}, { message: 'La fecha de carga debe ser válida' })
  fechaCarga!: string;

  @IsUUID('all', { message: 'La tarjeta no es válida' })
  tarjetaId!: string;
}
