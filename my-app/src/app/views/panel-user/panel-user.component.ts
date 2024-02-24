import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../interfaces/estimat.interface';
import { EstimatService } from '../../services/estimat.service';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-panel-user',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatProgressSpinnerModule],
  templateUrl: './panel-user.component.html',
  styleUrl: './panel-user.component.css'
})
export class PanelUserComponent implements OnInit {
  public users: IUser[] = [];
  public loading: boolean = true; // cambiar a false después de hacer la funcionalidad de Insert
  public colorSpinner: ThemePalette = "accent";
  public mode: ProgressSpinnerMode = 'indeterminate';

  public constructor(public _estimatService: EstimatService) { }

  /**
   * Loads all the users from the database.
   * @returns {void}
   */
  public loadAllUsers(): void {
    this.users = [];
    this._estimatService.getUsers().subscribe((usersApi) => {
      this.users = usersApi;
      this.loading = true;
    });
  }

  /**
   * Edits the user's info of a specific user.
   * @param {number} idUser
   * @returns {void}
   */
  public editUser(idUser: number): void {
    this.loading = false; // enables the spin loader 


  }

  /**
   * Deletes a user.
   * @param {number} idUser
   * @returns {void}
   */
  public deleteUser(idUser: number): void {
    this.loading = false;

    this._estimatService.deleteUser(idUser) // when this method has been executed the flow will continue
      .pipe(
        switchMap(() => this._estimatService.getUsers()) // it'll wait until the method before has ended
      )
      .subscribe(
        (usersApi) => {
          this.users = usersApi;
          this.loading = true;
        }
      );
  }

  /**
   * Loads all the users from the database.
   * @returns {void}
   */
  public ngOnInit(): void {
    // this.loadAllUsers();
  }

  /* public insertNewUser(): void {

  } */
}
