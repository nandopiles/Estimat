import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagenes-galeria',
  standalone: true,
  imports: [],
  templateUrl: './imagenes-galeria.component.html',
  styleUrl: './imagenes-galeria.component.css'
})
export class ImagenesGaleriaComponent {
  @Input() img: string = '';
}