import { ProductDetails } from './product-details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  laptop : ProductDetails[] = [];
  camera : ProductDetails[] = [];
  constructor() { }
  
  addProduct(product: ProductDetails){
    console.log(product);
    if(product.productCategory == 'Laptop'){
      this.laptop.push(product);
      console.log(this.laptop.length);
    }else {
      this.camera.push(product);
    }
}
getallLaptops() : ProductDetails[]{
  console.log(this.laptop);
  return this.laptop;
}
getallCameras() : ProductDetails[]{
  console.log(this.camera);
  return this.camera;
}
}
