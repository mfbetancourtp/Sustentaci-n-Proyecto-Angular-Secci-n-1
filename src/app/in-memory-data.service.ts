import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Spiderman', age: 18, weight: 70, height: 175, gender: 'Male', strength: 150, photo: 'https://w.wallhaven.cc/full/lm/wallhaven-lm8682.jpg' },
      { id: 2, name: 'Iron man', age: 40, weight: 74, height: 180, gender: 'Male', strength: 200, photo: 'https://w.wallhaven.cc/full/k9/wallhaven-k978dm.jpg' },
      { id: 3, name: 'Hulk', age: 50, weight: 120, height: 210, gender: 'Male', strength: 500, photo: 'https://w.wallhaven.cc/full/49/wallhaven-491ygd.jpg' },
      { id: 4, name: 'Thor', age: 46, weight: 80, height: 190, gender: 'Male', strength: 400, photo: 'https://assets-prd.ignimgs.com/2022/07/07/thor-2011-1657208699204.jpg' },
      { id: 5, name: 'Scarlet Witch', age: 29, weight: 50, height: 160, gender: 'Female', strength: 800, photo: 'https://hips.hearstapps.com/hmg-prod/images/scarlet-witch-elizabeth-olsen-doctor-strange-fotogramas-1657274242.jpeg?crop=1xw:1xh;center,top&resize=980:*' },
      { id: 6, name: 'Doctor Strange', age: 52, weight: 77, height: 185, gender: 'Male', strength: 320, photo: 'https://w.wallhaven.cc/full/r7/wallhaven-r7dvzj.jpg' },
];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
