import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAdminPanelComponent } from '../../components/header-admin-panel/header-admin-panel.component';

@Component({
  selector: 'app-panel-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderAdminPanelComponent],
  templateUrl: './panel-layout.component.html',
  styleUrl: './panel-layout.component.css'
})
export class PanelLayoutComponent {

}
