import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  platoResta: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurant();
  }

  getRestaurant(): void {
    this.restaurantService.getRestaurant()
      .subscribe(restaurantes => this.platoResta = restaurantes);
      console.log(this.platoResta)
  }
}
