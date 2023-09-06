import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurantes: Restaurant[] = [];
  selectedPhoto: string | null = null; // Holds the selected image URL
  buttonClass: string = '';

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurant();
  }

  getRestaurant(): void {
    this.restaurantService.getRestaurant()
      .subscribe(restaurant => this.restaurantes = restaurant);
  }

  add(name: string, age: number | null, weight: number | null ): void {
    name = name.trim();
    if (!name) { return; }
    this.restaurantService.addPlato({
      name,
      age,
      weight,
       
    } as Restaurant)
      .subscribe(restaurant => {
        this.restaurantes.push(restaurant);
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

  delete(restaurant: Restaurant): void {
    this.restaurantes = this.restaurantes.filter(h => h !== restaurant);
    this.restaurantService.deletePlato(restaurant.id).subscribe();
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
