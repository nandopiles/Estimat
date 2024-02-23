import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

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

public onSubmit(): void {
  console.log('form: ', this.reactiveForm);
  console.log('form: ', this.reactiveForm.value);
  console.log('form: ', this.reactiveForm.value.password);
}

}
