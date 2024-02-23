import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../interfaces/estimat.interface';

@Component({
  selector: 'app-panel-user',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './panel-user.component.html',
  styleUrl: './panel-user.component.css'
})
export class PanelUserComponent {
  public users: IUser[] = [
    {
      id: 0,
      email: '',
      name: '',
      password: '',
      role: false,
      status: false
    }
  ];

  public editUser(idUser: number): void {

  }

  public deleteUser(idUser: number): void {

  }

  /* public insertNewUser(): void {

  } */
}
