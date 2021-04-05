import { Injectable, NotFoundException } from '@nestjs/common';
import { AddProductDto } from './dto/addProduct.products.dto';
import { UpdateProductsDto } from './dto/updateProduct.products.dto';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [
    {
      title: 'Nike',
      price: 2,
      desc: 'Running Shoe',
      id: 1,
    },
  ];

  getAllProducts() {
    return this.products;
  }
  createProduct(createProduct: AddProductDto) {
    let id = 1;
    if (this.products.length > 0) {
      id = this.products[this.products.length - 1].id + 1;
    }
    createProduct.id = id;

    this.products.push(createProduct);
    return this.products;
  }
  updateProducts(id: number, updateProduct: UpdateProductsDto) {
    let product = this.findProduct(id);
    let index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...updateProduct,
    };
    return this.products;
  }
  getProduct(id: number) {
    return this.findProduct(id);
  }
  deleteProduct(id: number) {
    let product = this.products.filter((item) => item.id !== id);

    this.products = product;
    return this.products;
  }
  private findProduct(id: number) {
    let product = this.products.find((item) => item.id === id);

    if (!product) throw new NotFoundException('Couldnt Found Product');
    else return product;
  }
}
