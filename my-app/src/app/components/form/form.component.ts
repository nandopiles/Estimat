import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

reactiveForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
});

loginForm = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
});

public onSubmit(): void {
  console.log('form: ', this.reactiveForm);
  console.log('form: ', this.reactiveForm.value);
  console.log('form: ', this.reactiveForm.value.password);
}

constructor(private http: HttpClient) {}

onSubmitReactiveForm(): void {
  console.log('Reactive Form:', this.reactiveForm.value);
}

onSubmitLoginForm(): void {
  const url = 'URL_DE_TU_API/login'; // Reemplaza con la URL de tu endpoint de inicio de sesión
  const credentials = this.loginForm.value;

  this.http.post(url, credentials).subscribe(
    (response) => {
      // Maneja la respuesta del servidor (autenticación exitosa)
      console.log('Autenticación exitosa:', response);
    },
    (error) => {
      // Maneja los errores (autenticación fallida)
      console.error('Error de autenticación:', error);
    }
  );
}
}
