import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../interfaces/estimat.interface';
import { EstimatService } from '../../services/estimat.service';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-panel-user',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatProgressSpinnerModule],
  templateUrl: './panel-user.component.html',
  styleUrl: './panel-user.component.css'
})
export class PanelUserComponent implements OnInit {
  public users: IUser[] = [];
  public loading: boolean = false;
  public colorSpinner: ThemePalette = "accent";
  public mode: ProgressSpinnerMode = 'indeterminate';

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
      usersApi.forEach((user) => this.users.push(user));
      this.loading = true;
    });
  }

  /* public insertNewUser(): void {

  } */
}
