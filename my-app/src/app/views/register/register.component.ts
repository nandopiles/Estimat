import { Component, OnInit } from '@angular/core';

import { FormRegisterComponent } from '../../components/form-register/form-register.component';

import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormRegisterComponent, MatProgressSpinnerModule, MatProgressSpinnerModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
