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
  
  constructor(ps : ProductServiceService) {
    this.productService = ps;
   }

  
  ngOnInit(): void {
  }

  getallCameras():ProductDetails[]{
    console.log(this.productService.getallCameras());
    return this.productService.getallCameras();
  }

}
