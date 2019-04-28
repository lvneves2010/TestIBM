import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../../services/chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  messages = [];
  message;
  context = {};
  disableSend = false;
  constructor(public chatBot: ChatbotService) { }

  ngOnInit() {
  	this.chatBot.getSalutation().then(response => {
      this.context = response["context"];
  		this.messages.push({from: 'watson', msg:response["output"]["text"]});
  	});
  }

  sendMessage(){
    if (this.message != "") {
      this.disableSend = true;
      this.chatBot.getMsg(this.message, this.context).then(response => {
        this.messages.push({from: 'user', msg:this.message});
        this.message = "";
        this.context = response["context"];
        this.messages.push({from: 'watson', msg:response["output"]["text"]});
        this.disableSend = false;
      }, error => {
        console.log(error);
      });
    }
  }

}
