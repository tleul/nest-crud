import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

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
  imports: [ProductsModule, MongooseModule.forRoot(config.mongoUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
