import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { API, APP_CONFIG } from '../constants';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }

  signup(data:object):void{
    console.warn(data)
    this.apiService.makeRequest("post",API.users+API.add,data).subscribe((data)=>{console.warn(data)},(error)=>{console.warn(error)})

  }
}
