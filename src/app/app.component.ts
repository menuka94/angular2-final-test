import {Component } from '@angular/core';
import {Hero} from "./Models/Hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';

  heroes: Hero[];

  ngOnInit(): void{
    this.getHeroes();
  }

  selectedHero: Hero;
  constructor(private heroService: HeroService) {}

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}

