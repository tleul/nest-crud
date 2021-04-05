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
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }
  @Post()
  addProduct(@Body() completedProduct: AddProductDto) {
    return this.productsService.createProduct(completedProduct);
  }
  @Patch(':id')
  updateProduct(
    @Param('id') id: number,
    @Body() updateProduct: UpdateProductsDto,
  ) {
    return this.productsService.updateProducts(id, updateProduct);
  }
  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.productsService.getProduct(id);
  }
  @Delete(':id')
  deletProduct(@Param('id') id: number) {
    return this.productsService.deleteProduct(id);
  }
}
