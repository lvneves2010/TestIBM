import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ChamadoService } from '../../services/chamado.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { Observable, Subscription } from 'rxjs';

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
  loading = false;
  private subscription!: Subscription;
  
  constructor(private chamadoService: ChamadoService) { }

  ngOnInit() {
    this.chamadoService.getChamados()
      .then(res => {
        this.chamados = res;
      }, err => {
        console.log(err);
      });

      this.subscription = this.chamadoService.chamadoCriado$.subscribe(() => {
      this.loadChamados();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadChamados() {
    this.loading = true;
    this.chamadoService.getChamados()
      .then(res => {
        this.chamados = res;
        this.loading = false;
      })
      .catch(err => {
        console.error(err);
        this.loading = false;
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
