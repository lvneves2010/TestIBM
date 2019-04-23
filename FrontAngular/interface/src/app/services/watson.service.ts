import { Injectable } from '@angular/core';
import { ApiService }  from './api-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WatsonService extends ApiService{

  constructor(http: HttpClient) {
  	super(http);
  }


  getSalutation() {
    return new Promise((resolve, reject) => {
      super.get('3001', 'mensagem', {texto: ''}).then((response) => {
        console.log(response);
        resolve(response);
      })
    });
  }
  getMsg(msg : string){
  	return new Promise((resolve, reject) => {
  		super.get('3001', 'mensagem', {texto: msg}).then((response) => {
  			console.log(response);
  			resolve(response);
  		})
  	});
  }


}
