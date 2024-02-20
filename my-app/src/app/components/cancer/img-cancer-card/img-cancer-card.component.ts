import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-cancer-card',
  standalone: true,
  imports: [],
  templateUrl: './img-cancer-card.component.html',
  styleUrl: './img-cancer-card.component.css'
})
export class ImgCancerCardComponent {
  @Input() img: string = '/assets/img/title1.png';
}
