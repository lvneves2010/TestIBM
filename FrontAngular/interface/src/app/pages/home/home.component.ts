import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { HttpClient } from '@angular/common/http';
import { WatsonService  } from '../../services/watson.service';
import { ChamadosService } from '../../services/chamados.service';

@Component({
  selector: 'ibm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public showChamados = "chamados";
  public name;
  public message;
  public messages = [];
  public showChat = false;

  constructor(public watson: WatsonService, public chamados: ChamadosService) {

  }

  ngOnInit() {
    this.getChamados();
    this.watson.getSalutation().then(greetings => {
      console.log(greetings);
      this.messages.push({from: 'watson', msg:greetings["resposta"]});
    });
  }

  saveName(){
    this.showChat = true;
  }
  sendMessage(){
    this.watson.getMsg(this.message).then(response => {
      this.messages.push({from: 'user', msg:this.message});
      this.message = "";
      this.messages.push({from: 'watson', msg:response["resposta"]});
      console.log(this.messages);
    }, error => {
      console.log(error);
    });
  }

  getChamados() {
    this.chamados.getChamados().then(response => {
      console.log("chamados", response);
    })
  }

  changeChamados(output) {
    console.log("output", output);
    this.showChamados = output.type;
  }
}
