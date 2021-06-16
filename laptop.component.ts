import { CartsService } from './../carts.service';
import { ProductDetails } from './../product-details';
import { ProductServiceService } from './../product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  
  productService : ProductServiceService;
  cartService : CartsService;
  constructor(ps : ProductServiceService,cs : CartsService) {
    this.productService = ps;
    this.cartService = cs;
   }

  ngOnInit(): void {
  }
  getallLaptops():ProductDetails[]{
    console.log(this.productService.getallLaptops());
    return this.productService.getallLaptops();
  }
  addToCart(product:ProductDetails){
     this.cartService.addProduct(product);
  }
}
