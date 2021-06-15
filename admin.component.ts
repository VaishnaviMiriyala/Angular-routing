import { Component, OnInit } from '@angular/core';
import { ProductDetails } from '../product-details';
import { ProductServiceService } from '../product-service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  
  productModel:ProductDetails = new ProductDetails('',0,''); 
  __productService : ProductServiceService;

  constructor(ps:ProductServiceService) { 
    this.__productService = ps;
  }
  ngOnInit(): void {
  }
  
  onSubmit()
  {
    console.log("==>on submit "+this.productModel.productName);
    this.__productService.addProduct(this.productModel);
  }
  
}
