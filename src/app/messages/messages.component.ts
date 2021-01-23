// Usando o message.service.ts, vai mostrar, depois de tudo, os id que eu cliquei
// A mensagem, do id e nome do hero, esta implementada no heroes.component.ts, em que, quando a funcao
// de apertar o botao eh chamado, ele ja seta a mensagem lah. E COMO FUNCIONA COMO UMA SINGLETON CLASS
// caso seja alterado de algum lugar, VAI SER ALTERADO EM TODOS

import { Component, OnInit } from '@angular/core';

import { MessageService } from "../message.service"

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // precisa ser public, pq vai dar um bind no template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
