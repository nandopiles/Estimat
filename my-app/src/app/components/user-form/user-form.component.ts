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
  @Input() isNewUser: boolean = false;
  @Input() userSelected: IUser = {
    id: 0,
    email: '',
    name: '',
    password: '',
    role: false,
    status: false
  }
  // @Output() userModified = new EventEmitter<IUser>();
  public reactiveForm = new FormGroup({ // loads the info of the user that has been passed. If there's no user the camps will be empty
    id: new FormControl(this.userSelected.id),
    name: new FormControl(this.userSelected.name),
    password: new FormControl(this.userSelected.password),
    email: new FormControl(this.userSelected.email),
    status: new FormControl(this.userSelected.status),
    role: new FormControl(this.userSelected.role)
  });

  public onSubmit(): void {

  }
}
