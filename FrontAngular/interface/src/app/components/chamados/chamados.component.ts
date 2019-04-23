import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { ApiService } from '../api.service';
import { ChamadosService } from '../../services/chamados.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'ibm-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent implements OnInit {

  @Output() changeChamados = new EventEmitter();
  chamados: any;
  displayedColumns = ['nome', 'descricao', 'situacao'];
  dataSource = new ChamadoDataSource(this.chamadoService);

  constructor(public chamadoService: ChamadosService) { }

  ngOnInit() {
    this.chamadoService.getChamados()
      .then(res => {
        console.log(res);
        this.chamados = res;
      }, err => {
        console.log(err);
      });
  }

  add() {
    console.log("AASDFASFASDFASFAADSFSA");
    this.changeChamados.emit({'type':'create'})
  }

}

export class ChamadoDataSource extends DataSource<any> {
  constructor(public chamadosService: ChamadosService) {
    super()
  }

  connect() {
    return this.chamadosService.getChamadosDataTable();
  }

  disconnect() {

  }
}
