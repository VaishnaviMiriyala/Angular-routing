import { CartsService } from './../carts.service';
import { Component, OnInit } from '@angular/core';
import { ProductDetails } from './../product-details';
import { ProductServiceService } from './../product-service.service';
@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  
  productService : ProductServiceService;
  cartService : CartsService;
  constructor(ps : ProductServiceService,cs : CartsService) {
    this.productService = ps;
    this.cartService = cs;
   }

  
  ngOnInit(): void {
  }

  getallCameras():ProductDetails[]{
    console.log(this.productService.getallCameras());
    return this.productService.getallCameras();
  }
  addToCart(product:ProductDetails){
    this.cartService.addProduct(product);
 }
}
