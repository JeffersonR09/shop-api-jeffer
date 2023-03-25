import { IsString } from 'class-validator';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  MinLength,
} from 'class-validator/types/decorator/decorators';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  titulo: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsOptional()
  @MinLength(15)
  description: string;

  @IsString()
  @IsOptional()
  slug: string;

  @IsNumber()
  @IsOptional()
  stock: number;

  @IsOptional()
  @IsString()
  gender: string;
}
