import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./Models/Hero";

@Injectable()
export class HeroService {
  constructor() { }

  getHeroes(): Promise<Hero[]>{
      return Promise.resolve(HEROES);
  }
}
