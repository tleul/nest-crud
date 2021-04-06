import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { get } from 'node:http';
import { AddProductDto } from './dto/addProduct.products.dto';
import { UpdateProductsDto } from './dto/updateProduct.products.dto';
import { Product } from './products.schema';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProduct: AddProductDto): Promise<Product> {
    return this.productsService.createProduct(createProduct);
  }
  @Get()
  get() {
    return this.productsService.getAllProducts();
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }
}
