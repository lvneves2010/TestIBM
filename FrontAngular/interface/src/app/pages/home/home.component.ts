import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ibm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends ApiService implements OnInit{
  public name;
  public message;
  public messages = [];
  public showChat = false;

  constructor(public http: HttpClient) { 
    super(http);
  }

  ngOnInit() {

  }
  saveName(){
    this.showChat = true;
  }
  sendMessage(){
    super.getMsg('mensagem', this.message).then(response => {
      this.messages.push(this.message);
      this.message = "";
      this.messages.push(response["resposta"]);
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
