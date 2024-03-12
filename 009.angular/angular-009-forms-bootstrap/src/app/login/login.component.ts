import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../interfaces/login.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // 2-crear formulario
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  // 1-construir objetos con formBuilder
  constructor(private fb: FormBuilder,
    private httpclient: HttpClient,
    private router: Router) {}

  // 3-metodo save
  save() {
    // crear objeto
    let login: Login = {
      email: this.loginForm.get('email')?.value ?? '', 
      password: this.loginForm.get('password')?.value ?? ''
    }

    // 4-enviar por POST a backend con http
    let url = 'http://localhost:3000/login';
    this.httpclient.post<Login>(url, login).subscribe(res => { // la respuesta tendría un token JWT que podríamos guardar en localStorage
      console.log(res); // esto devuelve la autentificación y respuesta
      this.router.navigate(['/product-list']);  // redirigir hacia la pagina home
    }); 
  }

}
