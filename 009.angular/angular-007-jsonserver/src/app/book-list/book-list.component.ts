import { Component, OnInit } from '@angular/core';
import { Book } from '../interfacces/book.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {  // ejemplo SIN SERVICIO

  // array de books
  books: Book[] = [];

  // constructor con httpClient
  constructor(private http: HttpClient) { } // para que funcione el httpClient tienes que poner en imports HttpClientModule
  // ejemplo SIN SERVICIO
  ngOnInit(): void { // ngOnInit inicializar el array trayendo libros con httpClient
    this.http.get<Book[]>('http://localhost:3000/books').subscribe(books => this.books = books);
  }
 }
 // HTML LLAMA AL TS Y EL TS LLAMA AL API     
 // HTML -> TS -> API
