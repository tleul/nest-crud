import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductSchema, Product } from './products.schema';
import { ProductsService } from './products.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
