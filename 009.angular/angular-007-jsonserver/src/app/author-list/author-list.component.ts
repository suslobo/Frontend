import { Component, OnInit } from '@angular/core';
import { Author } from '../interfacces/author.model';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { AuthorService } from '../services/author.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [HttpClientModule, RouterLink, DatePipe],
  providers: [AuthorService], 
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css'
})
export class AuthorListComponent implements OnInit{

  authors: Author[] = [];

  constructor(private authorService: AuthorService) {} // para que funcione el httpClient tienes que poner en imports HttpClientModule
  
  ngOnInit(): void {
    this.loadAuthors(); // creamos el metodo loadAuthors
  }
  loadAuthors() {
    this.authorService.findAll().subscribe(authors => this.authors = authors);
  }
  deleteAuthor(id: string | number) {
    // 1. mostrar un confirm que pregunte si quiere borrar el autor?
    const remove: boolean = confirm("¿Quiere borrar el autor de verdad?");

    if(!remove) return; // si el usuario no ha confirmado entonces no se borra

    // 2. llamar a deleteById
    this.authorService.deleteById(id).subscribe(() => {
      // 3. loadAuthors de nuevo para refrescar la tabla
      this.loadAuthors(); // refresca la tabla para que desaparezca el autor borrado
    });
  }
}
