import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../../services/chatbot.service';
import { ChamadoService } from 'src/app/services/chamado.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  messages: { from: string, msg: string }[] = [];
  nome = '';
  descricao = '';
  message = '';
  session_id = '';
  disableSend = false;

    constructor(
    public chatBot: ChatbotService,
    private chamadoService: ChamadoService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.chatBot.getSalutation().then((response: any) => {
      if (response.session_id) {
        this.session_id = response.session_id;
      }
      this.handleWatsonResponse(response);
    });
  }

  sendMessage() {
    if (this.message.trim() !== "") {
      this.disableSend = true;

      this.chatBot.getMsg(this.message, this.session_id).then((response: any) => {
        this.messages.push({ from: 'user', msg: this.message });
        this.message = "";

        if (response.session_id) {
          this.session_id = response.session_id;
        }

        this.handleWatsonResponse(response);
        this.disableSend = false;

      }, error => {
        console.error(error);
        this.disableSend = false;
      });
    }
  }

  private handleWatsonResponse(response: any) {

    const generics = response.output.generic || [];
    generics.forEach(g => {
      if (g.response_type === "text") {
        this.messages.push({ from: 'watson', msg: g.text });
      }
    });

    if (response.output.user_defined) {
      this.nome = response.output.user_defined.context.values.nome || '';
      this.descricao = response.output.user_defined.context.values.problem || '';

      if (this.nome && this.descricao) {
        const chamadoData = {
          nome: this.nome,
          descricao: this.descricao,
          situacao: 'Aberto'
        };

        this.http.post('https://e2b80b9d31da.ngrok-free.app/api', chamadoData)
          .subscribe({
            next: () => {
              console.log('Chamado registrado com sucesso no banco de dados.')
              this.chamadoService.notificarNovoChamado();}, // 🔹 Dispara atualização,
            error: (err) => console.error('Erro ao registrar chamado:', err)
          });
      }
    }
  }
}
