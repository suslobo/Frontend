import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Author } from '../interfaces/author.model';
import { Book } from '../interfaces/book.model';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent implements OnInit {

  author: Author | undefined;
  books: Book[] = []; // array

  constructor(private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if(!id) {
        return; // si no hay author se termina el método
      }
      // traer el id de author
      this.httpClient.get<Author>('http://localhost:3000/author/' + id)
      .subscribe(category => this.author = category);

      this.httpClient.get<Book[]> ('http://localhost:3000/author/filter-by-author-id/' + id)
      .subscribe(books => this.books = books);
    });
}
}