import { formatNumber } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Author } from '../interfaces/author.model';
import { read } from '@popperjs/core';

@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [RouterLink, HttpClientModule, ReactiveFormsModule],
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.css'
})
export class AuthorFormComponent implements OnInit {

  authorForm = new FormGroup({
    id: new FormControl(0),
    firstName: new FormControl(''),
    // lastName: new FormControl(''),
    // birthDate: new FormControl(new Date()),
    // salary: new FormControl(0.0),
    // photoUrl: new FormControl(''),
    // country: new FormControl(''),

  });
  photoFile: File | undefined;
  photoPreview: string | undefined;

  ngOnInit(): void {

  }

  onFileChange(event: Event) {

    let target = event.target as HTMLInputElement;

    if (target.files !== null && target.files.length > 0) {
      this.photoFile = target.files[0]; // extraer el primer archivo

      // Opcional: mostrar imgagen por pantalla para previsualizarla antes de subirla
      // se hace una variable photoPreview
      let reader = new FileReader();
      reader.onload = event => this.photoPreview = reader.result as string;
      reader. readAsDataURL(this.photoFile);
    }
  }

  save() {
    
    const author: Author = {
      id: 0,
      firstName: '',
      lastName: '',
      birthDate: new Date(),
      salary: 0,
      photoUrl: '',
      country: '',
      bio: '',
      wikipediaUrl: '',
    };
    console.log(author);
    console.log(this.photoFile);
  }

}
