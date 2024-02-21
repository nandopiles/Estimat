import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-panel-gallery',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './panel-gallery.component.html',
  styleUrl: './panel-gallery.component.css'
})
export class PanelGalleryComponent {

}
