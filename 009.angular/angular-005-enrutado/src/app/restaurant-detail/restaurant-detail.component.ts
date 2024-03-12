import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../interfaces/reaturant.model';

@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.css'
})
export class RestaurantDetailComponent implements OnInit{

  restaurant: Restaurant | undefined;


  constructor (private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // params es un Observable de rxjs
    // esto captura el id de la url (id del restaurante)
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);

    // convertir id de string a número
      let idString = params['id'];
      let idNum = parseInt(idString, 10);
      console.log(idNum);

    // creamos un objeto restaurante con el id capturado
      this.restaurant = {
        id: idNum,
        name: "Tres Mares",
        location: "Corazón de María, 23",
        phone: "765456776",
        rating: 5,
        imageUrl: "https://placehold.co/600"

      };

    // llamar al backend pidiendo al restaurante por el id


    });
  }

}
