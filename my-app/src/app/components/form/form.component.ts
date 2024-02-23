import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
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
