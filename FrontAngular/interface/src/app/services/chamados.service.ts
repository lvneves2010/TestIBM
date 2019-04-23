import { Injectable } from '@angular/core';
import { ApiService }  from './api-service';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChamadosService extends ApiService{

  constructor(http: HttpClient) {
  	super(http);
  }

  getChamados() {
    return new Promise((resolve, reject) => {
    	super.get('3000', 'api', {}).then((response) => {
    		resolve(response);
    	})
    });
  }

  getChamadosDataTable(): Observable<any> {
    return super.getObservable('3000', 'api', {});
  }
  getChamado(id: string) {
    return super.get('3000', id, {});
  }

  postChamado(data) {
    return super.post('3000', '', data);
  }

  updateChamado(id: string, data) {
    return super.put('3000', id, data);
  }

  deleteChamado(id: string) {
    return super.delete('3000', id);
  }

}
