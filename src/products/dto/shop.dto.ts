import { IsString } from 'class-validator';
import {
  IsNotEmpty,
  IsNumber,
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

  description: string;

  slug: string;

  stock: number;

  gender: string;
}
