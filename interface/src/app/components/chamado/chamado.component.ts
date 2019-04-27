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
  public apiservice: ApiService;
  database =
    [
      {
        "_id": "5cbc5459be69a50610203b2e",
        "nome": "Leonardo Neves",
        "descricao": "Teste novo BD",
        "situacao": "Encerrado",
        "atendente": "Vinicius",
        "updated_date": "2019-04-21T11:30:33.329Z",
        "__v": 0
      },
      {
        "_id": "5cbc5459be69a50610203b2e",
        "nome": "Leonardo Neves",
        "descricao": "Teste novo BD",
        "situacao": "Encerrado",
        "atendente": "Vinicius",
        "updated_date": "2019-04-21T11:30:33.329Z",
        "__v": 0
      },
      {
        "_id": "5cbc5459be69a50610203b2e",
        "nome": "Leonardo Neves",
        "descricao": "Teste novo BD",
        "situacao": "Encerrado",
        "atendente": "Vinicius",
        "updated_date": "2019-04-21T11:30:33.329Z",
        "__v": 0
      },
      {
        "_id": "5cbc5459be69a50610203b2e",
        "nome": "Leonardo Neves",
        "descricao": "Teste novo BD",
        "situacao": "Encerrado",
        "atendente": "Vinicius",
        "updated_date": "2019-04-21T11:30:33.329Z",
        "__v": 0
      },
      {
        "_id": "5cbc5459be69a50610203b2e",
        "nome": "Leonardo Neves",
        "descricao": "Teste novo BD",
        "situacao": "Encerrado",
        "atendente": "Vinicius",
        "updated_date": "2019-04-21T11:30:33.329Z",
        "__v": 0
      },
      {
        "_id": "5cbc5459be69a50610203b2e",
        "nome": "Leonardo Neves",
        "descricao": "Teste novo BD",
        "situacao": "Encerrado",
        "atendente": "Vinicius",
        "updated_date": "2019-04-21T11:30:33.329Z",
        "__v": 0
      },
      {
        "_id": "5cbc574e696c9f1e80f6ef85",
        "nome": "gustavo Campos",
        "descricao": "bicicleta roubada tem que fazer a reservista, assistir oooooodsjhjhfkjhsjgsfbb    jdfkjhdfjkhhfd",
        "situacao": "em aberto",
        "atendente": "Jun",
        "updated_date": "2019-04-21T11:43:10.887Z",
        "__v": 0
      },
      {
        "_id": "5cbc5cb3351adb12b864cd38",
        "nome": "Valentina",
        "descricao": "ainda ta com fome",
        "situacao": "não resolvida",
        "atendente": "Fabricia",
        "updated_date": "2019-04-21T12:06:11.703Z",
        "__v": 0
      },
      {
        "_id": "5cbc5e2c351adb12b864cd39",
        "nome": "Tio Léo",
        "descricao": "Não tomou banho",
        "situacao": "critica",
        "atendente": "Chuveiro",
        "updated_date": "2019-04-21T12:12:28.439Z",
        "__v": 0
      },
      {
        "_id": "5cc22ccb14a8142d90217406",
        "nome": "Leonardo Vinicius",
        "descricao": "Teste novo front",
        "situacao": "Aberto",
        "atendente": "watson",
        "updated_date": "2019-04-25T21:55:23.933Z",
        "__v": 0
      }
    ];

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