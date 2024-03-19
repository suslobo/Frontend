import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Book } from '../interfaces/book.model';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [HttpClientModule, RouterLink, ReactiveFormsModule],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit {

  // vamos a traer un libro para poder reservarlo
  book: Book | undefined;
  price = 0;

  reservationForm = new FormGroup({
    // id: new FormControl<number>(0),
    startDate: new FormControl<Date>(new Date()),
    endDate: new FormControl<Date>(new Date()),
    // price: new FormControl<number>(0)
  });

  constructor(private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) return;

      this.httpClient.get<Book>("http://localhost:3000/book/" + id)
      .subscribe(book => this.book = book);
    });
  
  }
  // para calcular el precio total en base a lo que haya introducido el usuario
  calculatePrice() {
    console.log("Calcular precio")
    this.price = 80;
  }
  // mostrar en pantalla como precio final
  save() {

  }
}
