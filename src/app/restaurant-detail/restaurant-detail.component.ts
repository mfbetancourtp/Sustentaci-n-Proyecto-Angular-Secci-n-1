import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: [ './restaurant-detail.component.css' ]
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant | undefined;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRestaurant();
  }

  getRestaurant(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.restaurantService.getcarta(id)
      .subscribe(restaurant => this.restaurant = this.restaurant);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.restaurant) {
      this.restaurantService.updateplato(this.restaurant)
        .subscribe(() => this.goBack());
    }
  }
}
