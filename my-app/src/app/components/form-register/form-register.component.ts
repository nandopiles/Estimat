import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {

  public urlApi: string = 'http://localhost:8000/'; 
  public role: boolean = false;

  reactiveForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    repeatPassword: new FormControl(''),
    status: new FormControl('')
  });

  constructor(private http: HttpClient) {} 

  public onSubmit(): void {
    console.log('form: ', this.reactiveForm);
    console.log('form: ', this.reactiveForm.value);
    console.log('form: ', this.reactiveForm.value.password);
  }

  public insertUser(): void {
    const urlInsertUser = `${this.urlApi}insert/user`;
  
    const userData = {
      name: this.reactiveForm.value.name,
      password: this.reactiveForm.value.password,
      email: this.reactiveForm.value.email,
      status: this.reactiveForm.value.status, // Asegúrate de tener un campo 'status' en tu formulario
      role: this.role // Asegúrate de tener un campo 'role' en tu formulario
    };
  
    this.http.post(urlInsertUser, userData).subscribe(
      (response) => {
        console.log(response); // Maneja la respuesta del servidor aquí
      },
      (error) => {
        console.error(error); // Maneja los errores aquí
      }
    );
  }
  
}