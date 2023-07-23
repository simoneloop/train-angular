import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Product } from '../dataTypes';
import { API } from '../constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  productList:Product[]=[]
  constructor(private apiService:ApiService) { 
    this.getAllProduct().subscribe((res)=>{
      this.productList=res;
      
    })
  
  }

  addProduct(product:Product):Observable<Product>{
    return this.apiService.makeRequest("POST",API.product+API.addProduct,product)
    
  }

  getAllProduct():Observable<Product[]>{
    return this.apiService.makeRequest("GET",API.product+API.getAll)
  }
}
