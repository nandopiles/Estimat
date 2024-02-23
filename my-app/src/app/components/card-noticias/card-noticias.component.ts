import { Component, Input } from '@angular/core';
import { INew } from '../../interfaces/estimat.interface';

@Component({
  selector: 'app-card-noticias',
  standalone: true,
  imports: [],
  templateUrl: './card-noticias.component.html',
  styleUrl: './card-noticias.component.css'
})
export class CardNoticiasComponent {
  @Input() infoNew: INew = {
    id: 0,
    title: '',
    description: '',
    image: ''
  }
}
