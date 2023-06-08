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
    let result=this.apiService.makeRequest("post",API.users+API.add,data)
    result.subscribe((response)=>{
      //controlli
      if(response.body){
        this.isSellerLoggedIn.next(true)
        localStorage.setItem('seller',response.body)
        this.router.navigate(['seller-home']);

      }


    })

  }
}
