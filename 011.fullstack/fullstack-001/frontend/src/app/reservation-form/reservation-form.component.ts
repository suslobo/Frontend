import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Book } from '../interfaces/book.model';
import { end } from '@popperjs/core';
import { Reservation } from '../interfaces/reservation.model';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [HttpClientModule, RouterLink, ReactiveFormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit{

  book: Book | undefined;
  price = 0;
  numDays = 0;

  reservationForm = new FormGroup({

    startDate: new FormControl<Date>(new Date()),
    endDate: new FormControl<Date>(new Date()),
    premiumShip: new FormControl<boolean>(false),


  });

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) return;

      this.httpClient.get<Book>('http://localhost:3000/book/' + id)
      .subscribe(book => this.book = book);
    });
  }

  // esto calcula el precio total para la reserva en base a la cantidad de días seleccionados por el usuario 
  // en el precio por día del libro a reservar
  calculatePrice() {

    // calculo del precio total
    console.log("Calculando precio");

    let startDate = this.reservationForm.get('startDate')?.value;
    let endDate = this.reservationForm.get('endDate')?.value;
    // si no hay fecha de inicio o no hay fecha de fin, libro, precio del libro, return
    if (!startDate || !endDate || !this.book || !this.book.price) {
      return; // si no hay fecha ni libro, no se hace el cálculo
    }

    startDate = new Date (startDate);
    endDate = new Date (endDate);


    // constante para calcular por días Fecha de inicio y fecha de fin
    const diffMilliseconds = endDate.getTime() - startDate.getTime();

    if (diffMilliseconds <= 0) {
      return;
    }

    this.numDays = diffMilliseconds / (1000 * 60 * 60 * 24);
    
    // para calcular por precio
    this.price = this.numDays * this.book.price;

    const isPremiunShip = this.reservationForm.get('premiumShip')?.value;
    console.log(isPremiunShip);

    if(isPremiunShip)
      this.price += 4.99;
  }

  save() {

    // extraer los datos del formulario, crear un objeto reserva (con tres campos)
    const reserva: Reservation = {
      id: 0,
      startDate: this.reservationForm.get('startDate')?.value ?? new Date(),
      endDate: this.reservationForm.get('endDate')?.value ?? new Date(),
      price: this.price,
      book: this.book


    };

    // envíar al backend con método POST
    // this.httpClient.post
  }

}