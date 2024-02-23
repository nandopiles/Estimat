import { Component, Input } from '@angular/core';
import { ICardInfo } from '../../../interfaces/estimat.interface';

@Component({
  selector: 'app-description-index-card',
  standalone: true,
  imports: [],
  templateUrl: './description-index-card.component.html',
  styleUrl: './description-index-card.component.css'
})
export class DescriptionIndexCardComponent {
  @Input() infoCard: ICardInfo = {
    title: '',
    text: '',
    img: ''
  }
}
