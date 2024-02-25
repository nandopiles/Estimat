import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../interfaces/estimat.interface';
import { EstimatService } from '../../services/estimat.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  @Input() userSelected: any = {};

  public reactiveForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    status: new FormControl(false),
    role: new FormControl(false),
  });

  public constructor(public _estimatService: EstimatService) { }

  private populateForm(): void {
    this.reactiveForm.setValue({
      name: this.userSelected.name || '',
      password: this.userSelected.password || '',
      email: this.userSelected.email || '',
      status: this.userSelected.status || false,
      role: this.userSelected.role || false,
    });
  }

  /**
   * Fills the form's info with the User to modified.
   * @returns {void}
   */
  public ngOnInit(): void {
    this.populateForm();
  }

  public onSubmit(): void {
    const userCreated: IUser = {
      id: this.userSelected.id,
      email: this.reactiveForm.value.email ?? '',
      name: this.reactiveForm.value.name ?? '',
      password: this.reactiveForm.value.password ?? '',
      status: this.reactiveForm.value.status ?? false,
      role: this.reactiveForm.value.role ?? false
    }

    if (this.userSelected.id === 0) { // is an insert
      this._estimatService.insertUser(userCreated).subscribe((data) => console.log(data));
    } else { // is a modification of an existing User
      this._estimatService.updateUser(userCreated).subscribe((data) => console.log(data));
    }
  }
}
