import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class ChatbotService extends ApiService {

	constructor(http: HttpClient) {
  		super(http);
  	}


	getSalutation() {
		return new Promise((resolve, reject) => {
		  super.post('3001', 'conversation/', {text: ''}).then((response) => {
		    console.log(response);
		    resolve(response);
		  })
		});
	}
	
	getMsg(msg : string, context){
		return new Promise((resolve, reject) => {
			super.post('3001', 'conversation/', {text: msg, context: context}).then((response) => {
				console.log(response);
				resolve(response);
			})
		});
	}
}
