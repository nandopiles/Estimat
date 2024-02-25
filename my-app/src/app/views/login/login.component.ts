import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EstimatService } from '../../services/estimat.service';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 /* loginForm: FormGroup;
  errorMessage: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private estimatService: EstimatService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.estimatService.login(email, password).subscribe(
      (response: any) => {
        if (response.success) {
          // Redireccionar al usuario a la página de inicio o a donde quieras
        } else {
          this.errorMessage = 'Credenciales inválidas';
        }
      },
      (error: any) => {
        console.error('Error en la petición de login:', error);
        this.errorMessage = 'Error en el servidor, por favor intenta de nuevo más tarde';
      }
    );
  }*/
}



