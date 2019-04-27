import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.component.html',
  styleUrls: ['./chamado.component.scss']
})
export class ChamadoComponent implements OnInit {

  resposta: any;
  chamados: any;
  displayedColumns = ["Nome", "Descrição", "Situação"];
  dataSource = new ChamadoDataSource(this.api);
  
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getChamados()
      .subscribe(res => {
        console.log(res);
        this.chamados = res;
      }, err => {
        console.log(err);
      });
  }
}
export class ChamadoDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getChamados();
  }

  disconnect() {

  }
}
