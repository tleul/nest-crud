import { PartialType } from '@nestjs/swagger';
import { AddProductDto } from './addProduct.products.dto';

export class UpdateProductsDto extends PartialType(AddProductDto) {}
