import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamado-detail',
  templateUrl: './chamado-detail.component.html',
  styleUrls: ['./chamado-detail.component.scss']
})
export class ChamadoDetailComponent implements OnInit {

  chamado =
    {
      "_id": "5cbc5459be69a50610203b2e",
      "nome": "Leonardo Neves",
      "descricao": "Teste novo BD",
      "situacao": "Encerrado",
      "atendente": "Vinicius",
      "updated_date": "2019-04-21T11:30:33.329Z",
      "__v": 0
    }

  constructor() { }

  ngOnInit() {
  }

  delete() {
    
  }
}
