import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService extends ApiService {

  constructor(http: HttpClient) {
    super(http);
  }

  /**
   * Envia mensagem inicial para o Watson (saudação)
   */
  getSalutation() {
    return new Promise((resolve, reject) => {
      super.post('3001', 'conversation/', { text: '', session_id: '' })
        .then((response) => {
          console.log('Salutation response:', response);
          resolve(response);
        })
        .catch((err) => reject(err));
    });
  }

  /**
   * Envia mensagem para o Watson e mantém a sessão
   * @param msg Texto digitado pelo usuário
   * @param session_id ID da sessão ativa
   */
  getMsg(msg: string, session_id: string) {
    return new Promise((resolve, reject) => {
      super.post('3001', 'conversation/', { text: msg, session_id: session_id || '' })
        .then((response) => {
          console.log('Message response:', response);
          resolve(response);
        })
        .catch((err) => reject(err));
    });
  }
}

