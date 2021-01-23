import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { MessageService } from './message.service'

/*
  When you provide the service at the root level, Angular creates a single, shared instance of HeroService 
  and injects into any class that asks for it. Registering the provider in the @Injectable metadata also 
  allows Angular to optimize an app by removing the service if it turns out not to be used after all.

  Tipo uma singleton class
*/
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // Essa eh uma forma assincrona de pegar dados, ele soh vai mandar quando estiver pronto
  getHeroes(): Observable<Hero[]> {
    this.messageServ.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  constructor(private messageServ: MessageService) { }
}
