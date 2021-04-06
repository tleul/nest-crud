import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddProductDto } from './dto/addProduct.products.dto';
import { UpdateProductsDto } from './dto/updateProduct.products.dto';
import { Product, ProductDocument, ProductSchema } from './products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAllProducts() {
    // return this.products;
    let product = await this.productModel.find();
    return product;
  }
  async createProduct(createProduct: AddProductDto) {
    let product = new this.productModel(createProduct);
    product.save();
    return product;
    // let id = 1;
    // if (this.products.length > 0) {
    //   id = this.products[this.products.length - 1].id + 1;
    // }
    // createProduct.id = id;
    // this.products.push(createProduct);
    // return this.products;
  }
  async deleteProduct(id: string) {
    let product = await this.productModel.findByIdAndDelete(id);
    return product;
    // let product = this.products.filter((item) => item.id !== id);
    // this.products = product;
    // return this.products;
  }
  updateProducts(id: number, updateProduct: UpdateProductsDto) {
    // let product = this.findProduct(id);
    // let index = this.products.findIndex((item) => item.id === id);
    // this.products[index] = {
    //   ...product,
    //   ...updateProduct,
    // };
    // return this.products;
  }
  getProduct(id: number) {
    //  return this.findProduct(id);
  }

  private findProduct(id: number) {
    // let product = this.products.find((item) => item.id === id);
    // if (!product) throw new NotFoundException('Couldnt Found Product');
    // else return product;
  }
}
