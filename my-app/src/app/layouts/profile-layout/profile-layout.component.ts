import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderProfileComponent } from '../../components/header-profile/header-profile.component';

@Component({
  selector: 'app-profile-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderProfileComponent],
  templateUrl: './profile-layout.component.html',
  styleUrl: './profile-layout.component.css'
})
export class ProfileLayoutComponent {

}
