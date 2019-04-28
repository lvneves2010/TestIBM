import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost';
  constructor(public http: HttpClient) { }

  get(service, url, params) { 
    return this.http.get(`${this.apiUrl}:${service}/${url}`, {params:params}).toPromise();
  }

  getObservable(service, url, params) { 
    return this.http.get(`${this.apiUrl}:${service}/${url}`, {params:params});
  }

  post(service, url, params) {
    return this.http.post(`${this.apiUrl}:${service}/${url}`, params).toPromise();
  }

  put(service, url, params) {
    return this.http.put(`${this.apiUrl}:${service}/${url}`, params).toPromise();
  }
   
  delete(service, id) {
    return this.http.delete(`${this.apiUrl}:${service}/${id}`).toPromise();
  } 
}
