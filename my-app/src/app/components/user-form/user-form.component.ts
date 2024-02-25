import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../interfaces/estimat.interface';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @Input() userSelected: any = {};

  public reactiveForm = new FormGroup({ // loads the info of the user that has been passed. If there's no user the camps will be empty
    name: new FormControl(this.userSelected.name || ''),
    password: new FormControl(this.userSelected.password || ''),
    email: new FormControl(this.userSelected.email || ''),
    status: new FormControl(this.userSelected.status || false),
    role: new FormControl(this.userSelected.role || false)
  });

  public onSubmit(): void {
    const userCreated: IUser = {
      id: this.userSelected.id,
      email: this.reactiveForm.value.email,
      name: this.reactiveForm.value.name,
      password: this.reactiveForm.value.password,
      status: this.reactiveForm.value.status,
      role: this.reactiveForm.value.role
    }
    if (this.userSelected.id === 0) { // is an insert

    } else { // is a modification of an existing User

    }
    console.log(userCreated);
  }
}
