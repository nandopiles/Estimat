import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../interfaces/estimat.interface';
import { EstimatService } from '../../services/estimat.service';

@Component({
  selector: 'app-panel-user',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './panel-user.component.html',
  styleUrl: './panel-user.component.css'
})
export class PanelUserComponent implements OnInit {
  public users: IUser[] = [];

  public constructor(public _estimatService: EstimatService) { }

  /**
   * Edits the user's info of a specific user.
   * @param {number} idUser
   * @returns {void}
   */
  public editUser(idUser: number): void {

  }

  /**
   * Deletes a user.
   * @param {number} idUser
   * @returns {void}
   */
  public deleteUser(idUser: number): void {

  }

  /**
   * Loads all the users from the database.
   * @returns {void}
   */
  public ngOnInit(): void {
    this._estimatService.getUsers().subscribe((usersApi) => {
      usersApi.forEach((user) => this.users.push(user))
    })
  }

  /* public insertNewUser(): void {

  } */
}
