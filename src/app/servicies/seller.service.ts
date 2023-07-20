import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { API } from '../constants';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isSellerLoggedIn=new BehaviorSubject<boolean>(false);
  constructor(private apiService:ApiService,private router:Router) { }

  signUp(data:object):void{
    let result=this.apiService.makeRequest("post",API.users+API.addAdmin,data)
    result.subscribe((response)=>{
      //controlli
      localStorage.setItem('seller',JSON.stringify(response))
      this.isSellerLoggedIn.next(true)

      this.router.navigate(['seller-home']);
      


    })
    

  }

  reloadSeller():void{
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);


    }
  }
}
