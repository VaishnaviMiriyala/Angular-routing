import { ProductDetails } from './../product-details';
import { Component, OnInit } from '@angular/core';
import { CartsService } from './../carts.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartService : CartsService;
  constructor(cs : CartsService) {
    this.cartService = cs;
  }

  ngOnInit(): void {
  }
  getallCarts(): ProductDetails[]{
    return this.cartService.getAllCartProducts();
  }
  
}
