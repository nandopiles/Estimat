import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-profile',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-profile.component.html',
  styleUrl: './header-profile.component.css'
})
export class HeaderProfileComponent {

}
