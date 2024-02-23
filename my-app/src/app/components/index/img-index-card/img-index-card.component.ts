import { Component, Input } from '@angular/core';
import { ICardInfo } from '../../../interfaces/estimat.interface';

@Component({
  selector: 'app-img-index-card',
  standalone: true,
  imports: [],
  templateUrl: './img-index-card.component.html',
  styleUrl: './img-index-card.component.css'
})
export class ImgIndexCardComponent {
  @Input() infoCard: ICardInfo = {
    title: '',
    text: '',
    img: ''
  }
}
