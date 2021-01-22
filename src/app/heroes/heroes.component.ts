import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Hero } from "../hero"
import { HEROES } from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero = HEROES;

  // Dessa forma, da um erro, mas quando eu seleciono um hero lah no HTML, 
  // Ele seta esse selectHero para o que eu escolhei.
  // Inicialmente, no HTML nao mostra nada, pois o ngIf da falso, mas quando seleciona 1, 
  // esse selectHero tem um valor, da true e mostra os valores.
  selectHero: Hero;
  // Esse selectHero pega o valor do hero selecionado, por essa funcao
  onSelect(hero: Hero): void {
    this.selectHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}