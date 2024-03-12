import { Component } from '@angular/core';
import { Restaurant } from '../interfaces/reaturant.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {

  restaurants: Restaurant [] = [{
    id: 1,
    name: "100 montaditos",
    location: "Corazón de María, 12",
    rating: 5,
    phone: "91283837472",
    imageUrl: "https://placehold.co/300"
  },
  {
    id: 2,
    name: "100 montaditos",
    location: "Corazón de María, 12",
    rating: 4,
    phone: "91283837472",
    imageUrl: "https://placehold.co/300"
  },
  {
    id: 3,
    name: "100 montaditos",
    location: "Corazón de María, 12",
    rating: 7,
    phone: "91283837472",
    imageUrl: "https://placehold.co/300"
  }, 
  {
    id: 4,
    name: "100 montaditos",
    location: "Corazón de María, 12",
    rating: 5,
    phone: "91283837472",
    imageUrl: "https://placehold.co/300"
  }
];
}
