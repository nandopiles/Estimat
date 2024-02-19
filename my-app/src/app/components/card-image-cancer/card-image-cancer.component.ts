import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-image-cancer',
  standalone: true,
  imports: [],
  templateUrl: './card-image-cancer.component.html',
  styleUrl: './card-image-cancer.component.css'
})
export class CardImageCancerComponent {
@Input() images: string[] = ['../../../assets/img/title1.png', '../../../assets/img/title1.png']  
}
