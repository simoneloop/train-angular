import { Component, OnInit } from '@angular/core';
import { SellerService } from '../servicies/seller.service';
import { Product } from '../dataTypes';
import { ProductService } from '../servicies/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  
  constructor(private sellerService:SellerService,public productService:ProductService) { }

  ngOnInit(): void {
    
  }

  

}
