import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedPhoto: string | null = null; // Holds the selected image URL
  buttonClass:any = ''

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, age: number | null, weight: number | null, height: number | null, gender: string, strength: number | null, photo: string | null): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({
      name,
      age,
      weight,
      height,
      gender,
      strength,
      photo
    } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // Handle the photo change event and update the selectedPhoto property
  handlePhotoChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedPhoto = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  onMouseDown() {
    console.log('Mouse down event occurred.');
    this.buttonClass = 'button-pressed';
  }

  onMouseUp() {
    console.log('Mouse up event occurred.');
    this.buttonClass = 'button-normal';
  }

}
