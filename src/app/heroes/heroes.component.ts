// Inicio do programa, onde vai mostrar os ids, nomes e botao para apertar.

import { Component, OnInit } from '@angular/core';

import { Hero } from "../hero"
import { HeroService } from "../hero.service"
import { MessageService } from "../message.service"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero[] = [];

  // Dessa forma, da um erro, mas quando eu seleciono um hero lah no HTML, 
  // Ele seta esse selectHero para o que eu escolhei.
  // Inicialmente, no HTML nao mostra nada, pois o ngIf da falso, mas quando seleciona 1, 
  // esse selectHero tem um valor, da true e mostra os valores.
  selectHero: Hero = {};
  // Esse selectHero pega o valor do hero selecionado, por essa funcao
  onSelect(hero: Hero): void {
    this.selectHero = hero;
    this.messageService.add(`HeroesComponent: selected hero id =  ${hero.id}\tname = ${hero.name}`);
  }

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  // Essa eh uma forma Assincrona de receber dados, ele soh vai receber quando for mandado.
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(hero => this.hero = hero);
  }

}