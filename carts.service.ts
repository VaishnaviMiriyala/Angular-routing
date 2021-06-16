import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details';
@Injectable({
  providedIn: 'root'
})
export class CartsService {
  cart : ProductDetails[] = [];
  constructor() { }
  addProduct(product : ProductDetails){
    this.cart.push(product);
  }
  getAllCartProducts():ProductDetails[]{
    return this.cart;
  }
}
