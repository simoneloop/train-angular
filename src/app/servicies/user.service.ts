import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { API } from '../constants';
import { SellerService } from './seller.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserLoggedIn=new BehaviorSubject<boolean>(false);
  constructor(private apiService:ApiService, private router:Router,private sellerService:SellerService) { }

  login(data:Object):void{
    this.apiService.makeRequest("post",API.users+API.login,data).subscribe(res=>{
      if(res.role=="ADMIN"){
        this.sellerService.isSellerLoggedIn.next(true);
        localStorage.setItem("seller",JSON.stringify(res));
      }
      else if(res.role=="USER"){
        this.isUserLoggedIn.next(true)
        localStorage.setItem("user",JSON.stringify(res));
      }
    })
  }
}
