import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from '../../interfaces/estimat.interface';
import { EstimatService } from '../../services/estimat.service';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive, MatProgressSpinnerModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent implements OnInit {
  @Input() userSelected: any = {};
  public loading: boolean = false;
  public colorSpinner: ThemePalette = "accent";
  public mode: ProgressSpinnerMode = 'indeterminate';

  public reactiveForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    status: new FormControl(false),
    role: new FormControl(false),
  });

  public constructor(
    public _estimatService: EstimatService,
    private router: Router,
    private route: ActivatedRoute) { }

  private populateForm(): void {
    this.reactiveForm.setValue({
      name: this.userSelected.name || '',
      password: this.userSelected.password || '',
      email: this.userSelected.email || '',
      status: this.userSelected.status || false,
      role: this.userSelected.role || false,
    });
    this.loading = true;
  }

  /**
   * Fills the form's info with the User to modified.
   * @returns {void}
   */
  public ngOnInit(): void {
    this.populateForm();
  }

  /**
   * Redirects to the url passed by parameter.
   * @param {string} redirectUrl
   * @returns {void}
   */
  private handleSuccessAndRedirect(redirectUrl: string): void {
    this.loading = false;
    this.router.navigate([redirectUrl], { relativeTo: this.route });
  }

  /**
   * Makes the changes persisted in the database.
   * @returns {void}
   */
  public onSubmit(): void {
    const userCreated: IUser = {
      id: this.userSelected.id,
      email: this.reactiveForm.value.email ?? '',
      name: this.reactiveForm.value.name ?? '',
      password: this.reactiveForm.value.password ?? '',
      status: this.reactiveForm.value.status ?? false,
      role: this.reactiveForm.value.role ?? false
    }
    this.loading = false;

    if (this.userSelected.id === 0) { // is an insert
      this._estimatService.insertUser(userCreated).subscribe((data) => console.log(data));
    } else { // is a modification of an existing User
      this._estimatService.updateUser(userCreated).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          this.handleSuccessAndRedirect('/home');
        }
      );
    }
  }
}
