import { SellerService } from './../servicies/seller.service';
import { ApiService } from './../servicies/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { API } from '../constants';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  @Input() firstName: string | undefined;
  constructor(private sellerService:SellerService,private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.sellerService.reloadSeller()
  }

  signup(data:object):void{
    
    this.sellerService.signUp(data);
  }
}
