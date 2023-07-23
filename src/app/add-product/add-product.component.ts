import { Component, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../dataTypes';
import { ProductService } from '../servicies/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private productService:ProductService) {
    this.productForm=this.formBuilder.group({
      name:['',[Validators.required, Validators.pattern("^[a-zA-Z]+")]],
      typo:['',[Validators.required, Validators.pattern("^[a-zA-Z]+")]],
      quantity:['',[Validators.required, Validators.pattern("^[1-9][0-9]*")]]
    })
   }

  ngOnInit(): void {
  }

  addProduct():void{
    const product:Product=this.productForm.value;
    this.productService.addProduct(product).subscribe((res)=>{
      console.log(res)
      console.log("prodotto aggiunto con successo")
      this.productService.productList.push(res)
    })

  }

}
