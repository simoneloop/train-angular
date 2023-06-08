import { SellerService } from './../servicies/seller.service';
import { ApiService } from './../servicies/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API } from '../constants';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private sellerService:SellerService,private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  signup(data:object):void{
    console.warn(data)
    this.sellerService.signUp(data);

    /* this.apiService.makeRequest('post',API.users+API.add,data).subscribe((result)=>{
      if(result){
        this.router.navigate(['seller-home']);
      }
    }) */
  }
}
