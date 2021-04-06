import * as mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema({
  title: String,
  desc: String,
  price: Number,
});
