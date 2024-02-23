import { Component, Input } from '@angular/core';
import { ICardInfo } from '../../interfaces/estimat.interface';

@Component({
  selector: 'app-cancer-card',
  standalone: true,
  imports: [],
  templateUrl: './cancer-card.component.html',
  styleUrl: './cancer-card.component.css'
})
export class CancerCardComponent {
  @Input() infoCard: ICardInfo = {
    title: '',
    text: '',
    img: 'assets/img/title1.png'
  }
}
