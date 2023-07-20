import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.productForm = this.formBuilder.group({
      quantity: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      name:['',[Validators.required,Validators.pattern('^[a-zA-Z]+')]],
      typo:['',[Validators.required,Validators.pattern('^[]')]]
    });
  }

  ngOnInit() {
    
  }
  addProduct():void{
    console.log(this.productForm.invalid)
    console.log(this.productForm)
  }

}
