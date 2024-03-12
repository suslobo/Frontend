import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../interfaces/book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  // agregar import de formularios
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
// 1. creas formulario, 2. vas al html del book-form.component 3. haces el metodo
  bookForm = new FormGroup({
    title: new FormControl(''), // campo título
    numPages: new FormControl(150), // por defecto tiene 150 paginas
    price: new FormControl(),
    available: new FormControl(true),
    // publishDate: new FormControl('2023-11-15T10:30')
    // publishDate: new FormControl(new Date().toISOString().slice(0, 16)),
    publishDate: new FormControl(),
    category: new FormControl(),
    author: new FormControl(),
    // selección múltiple
    topics: new FormControl([]), // array
  });

  // creamos el metodo save

  save(): void {
    const title = this.bookForm.get('title')?.value;
    console.log(title);

    const numPages = this.bookForm.get('numPages')?.value;
    console.log(numPages);

    const price = this.bookForm.get('price')?.value;
    console.log(price);

    const available = this.bookForm.get('available')?.value;
    console.log(available);

    const publishDate = this.bookForm.get('publishDate')?.value;
    console.log(publishDate);

    const category = this.bookForm.get('category')?.value;
    console.log(category);

    const author = this.bookForm.get('author')?.value;
    console.log(author);

    const topics = this.bookForm.get('topics')?.value;
    console.log(topics);

    // una vez ya se tienen todas las variables con todos los datos del formulario
    // se puede crear un objeto de tipo Book y enviarlo a backend usando httpClient o un servicio
    // habría que crear una interface book.modles.ts

    const book: Book = {
      title: this.bookForm.get('title')?.value ?? 'default', // string
      numPages: this.bookForm.get('numPages')?.value ?? 0, // number int
      price: this.bookForm.get('price')?.value ?? 0.0, // number float
      available: this.bookForm.get('available')?.value ?? false, // boolean
      publishDate: this.bookForm.get('publishDate')?.value ?? new Date(), // fecha
      category: this.bookForm.get('category')?.value ?? 'default',
      topics: this.bookForm.get('topics')?. value ?? [],
    };

    // una vez creado el objeto book se puede optar por enviar con httpClient o servicio


  }

}
