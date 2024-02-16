import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-panel-news',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './panel-news.component.html',
  styleUrl: './panel-news.component.css'
})
export class PanelNewsComponent {

}
