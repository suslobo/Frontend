import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Author } from '../interfaces/author.model';

@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, RouterLink],
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.css'
})
export class AuthorFormComponent implements OnInit{

  // formulario
  authorForm = new FormGroup({
    id: new FormControl(0),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    birthDate: new FormControl(new Date()),
    salary: new FormControl(0.0),
    photoUrl: new FormControl(''),
    country: new FormControl(''),
    bio: new FormControl(''),
    wikipediaUrl: new FormControl('')
  });
  photoFile: File | undefined;
  photoPreview: string | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {

  }

  onFileChange(event: Event) {

    let target = event.target as HTMLInputElement;

    if (target.files !== null && target.files.length > 0) {
      this.photoFile = target.files[0]; // extraer el primer archivo

      // Opcional: Mostrar la imagen por pantalla para previsualizarla antes de subirla
      let reader = new FileReader();
      reader.onload = event => this.photoPreview = reader.result as string;
      reader.readAsDataURL(this.photoFile);
    }

  }

  save() {

    console.log(this.photoFile);
    
    let formData = new FormData();

    if(this.photoFile) // si existe foto la añado
      formData.append('file', this.photoFile);

    formData.append('firstName', this.authorForm.get('firstName')?.value ?? '');
    formData.append('lastName', this.authorForm.get('lastName')?.value ?? '');
    // para convertir el birthDate en string
    const birthDate = this.authorForm.get('birthDate')?.value;
    if(birthDate){
      const birthDateStr = birthDate.toISOString();
      formData.append('birthDate', birthDateStr);
    }
    // para convertir de number a string
    formData.append('salary', this.authorForm.get('salary')?.value + '');
    formData.append('country', this.authorForm.get('country')?.value ?? '');
    formData.append('bio', this.authorForm.get('bio')?.value ?? '');
    formData.append('wikipediaUrl', this.authorForm.get('wikipediaUrl')?.value ?? '');
    
    this.httpClient.post('http://localhost:3000/author', formData)
    .subscribe(author => {
      this.photoFile = undefined;
      this.photoPreview = undefined;
      console.log(author);

    })

  }

}