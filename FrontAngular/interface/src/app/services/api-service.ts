import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/';
  constructor(public http: HttpClient) { }

  getMsg(url, text) { 
    return this.http.get(this.apiUrl + url, {params:{texto: text}}).toPromise();
  }

}
