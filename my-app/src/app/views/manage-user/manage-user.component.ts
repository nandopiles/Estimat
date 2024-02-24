import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css'
})
export class ManageUserComponent {
  public reactiveForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    status: new FormControl(''),
    role: new FormControl('')
  });
  @Input() isNewUser: boolean = false;

  public onSubmit(): void {

  }
}
