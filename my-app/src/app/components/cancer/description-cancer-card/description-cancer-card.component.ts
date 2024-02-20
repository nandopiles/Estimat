import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-cancer-card',
  standalone: true,
  imports: [],
  templateUrl: './description-cancer-card.component.html',
  styleUrl: './description-cancer-card.component.css'
})
export class DescriptionCancerCardComponent {
  @Input() title: string = '';
  @Input() text: string = '';
}
