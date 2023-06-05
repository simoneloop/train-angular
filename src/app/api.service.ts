import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS, APP_CONFIG } from './constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   // Inserisci qui la base URL dell'API

  constructor(private http: HttpClient) { }

  get(url: string, body?: any, params?: any): Observable<any> {
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

    return this.http.get(url, options);
  }

  // Aggiungi altri metodi per le chiamate REST necessarie

}
