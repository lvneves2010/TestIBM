import { Injectable } from '@angular/core';
import { Observable, of, throwError, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService extends ApiService{

    private chamadoCriadoSource = new Subject<void>();
  chamadoCriado$ = this.chamadoCriadoSource.asObservable()

  constructor(public http: HttpClient) { 
  	super(http);
  }

  getChamados() {
    return super.get('3000', 'api', {});
  }

  getChamadosDataTable(): Observable<any> {
    return super.getObservable('3000', 'api', {});
  }
  getChamado(id: string) {
    return super.get('3000', `api/${id}`, {});
  }

  postChamado(data) {
    return super.post('3000', 'api/', data);
  }

  updateChamado(id: string, data) {
    return super.put('3000', `api/${id}`, data);
  }

  deleteChamado(id: string) {
    return super.delete('3000', `api/${id}`);
  }

  notificarNovoChamado() {
    this.chamadoCriadoSource.next();
  }

}
