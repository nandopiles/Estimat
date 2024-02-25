import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { EstimatService } from '../../services/estimat.service';
import { IUser } from '../../interfaces/estimat.interface';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatProgressSpinnerModule, UserFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  public idUser: any;
  public userSelected: IUser | null = null;
  public loading: boolean = false;
  public colorSpinner: ThemePalette = "accent";
  public mode: ProgressSpinnerMode = 'indeterminate';

  public constructor(private route: ActivatedRoute, public _estimatService: EstimatService) { }

  /**
   * Gets the id of the user that has to be modified.
   * 
   * Or you can not pass an id to insert a new User.
   * @returns {void}
   */
  public ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.idUser = params['id'];
        console.log('id: ' + this.idUser);

        this._estimatService.getUserById(this.idUser).subscribe((user) => {
          this.userSelected = user;
          console.log(user);
          this.loading = true;
        });
      }
    })
  }
}
