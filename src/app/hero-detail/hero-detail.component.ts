// Fazendo mais uma classe, para caso o projeto fique muito grande, seja mais facil a manutencao

// Classe que vai mostrar, se apertar o botao, o nome do Hero, com o id
import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
