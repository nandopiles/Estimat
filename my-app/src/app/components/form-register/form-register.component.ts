import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {

  reactiveForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    repeatPassword: new FormControl(''),
    cancer: new FormControl('')

  });
  
  public onSubmit(): void {
    console.log('form: ', this.reactiveForm);
    console.log('form: ', this.reactiveForm.value);
    console.log('form: ', this.reactiveForm.value.password);
  }
}
