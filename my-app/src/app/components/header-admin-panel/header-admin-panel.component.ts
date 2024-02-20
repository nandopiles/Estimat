import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-admin-panel',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-admin-panel.component.html',
  styleUrl: './header-admin-panel.component.css'
})
export class HeaderAdminPanelComponent {

}
