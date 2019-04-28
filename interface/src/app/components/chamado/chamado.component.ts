import { Component, OnInit, Input } from '@angular/core';
import { ChamadoService } from '../../services/chamado.service';
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
  dataSource = new ChamadoDataSource(this.chamadoService);
  
  constructor(private chamadoService: ChamadoService) { }

  ngOnInit() {
    this.chamadoService.getChamados()
      .then(res => {
        this.chamados = res;
      }, err => {
        console.log(err);
      });
  }
}

export class ChamadoDataSource extends DataSource<any> {
  constructor(private chamadoService: ChamadoService) {
    super()
  }

  connect() {
    return this.chamadoService.getChamadosDataTable();
  }

  disconnect() {

  }
}
