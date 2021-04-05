import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { UsersService } from './users/users.service';

// let products = [
//   {
//     name:'Banana',
//     price:'2'
//   },
//   {
//     name:'Cake'
//     price:'5'
//   }
// ]

@Module({
  imports: [ProductsModule],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService, UsersService],
})
export class AppModule {}
