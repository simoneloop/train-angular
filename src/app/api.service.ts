import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API, APP_CONFIG } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   // Inserisci qui la base URL dell'API

  constructor(private http: HttpClient) { }

  makeRequest(type:String,url:string, body?: any, params?: any): Observable<any> {
    let baseUrl=API.baseUrl
    url=baseUrl+url
    let options = {};

    if (params) {
      let httpParams = new HttpParams();
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.append(key, params[key]);
      });
      options = { params: httpParams };
    }

    if (body) {
      options = { ...options, body };
    }
    if(type.toLocaleLowerCase()=="put"){
      return this.http.put(url,body, options);
    }
    else if(type.toLocaleLowerCase()=="post"){
      console.warn(url,options)
      return this.http.post(url,body, options);
    }
    else if(type.toLocaleLowerCase()=="delete"){
      return this.http.delete(url, options);
    }
    
    return this.http.get(url, options);
    
  }

  
  

}
