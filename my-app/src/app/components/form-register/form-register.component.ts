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

  reactiveForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    repeatPassword: new FormControl(''),
    cancer: new FormControl('')
  });

  constructor(private http: HttpClient) {} 

  public onSubmit(): void {
    console.log('form: ', this.reactiveForm);
    console.log('form: ', this.reactiveForm.value);
    console.log('form: ', this.reactiveForm.value.password);
  }

  public insertUser(): void {
    const urlInsertUser = `${this.urlApi}insert/user`; 

    // Envía la solicitud POST al servidor
    this.http.post(urlInsertUser, this.reactiveForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}