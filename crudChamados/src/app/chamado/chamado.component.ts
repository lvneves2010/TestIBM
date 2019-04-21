import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.component.html',
  styleUrls: ['./chamado.component.css']
})
export class ChamadoComponent implements OnInit {

  chamados: any;
  displayedColumns = ['nome', 'descricao', 'situacao'];
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
