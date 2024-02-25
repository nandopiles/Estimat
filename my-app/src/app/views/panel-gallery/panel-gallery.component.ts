import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EstimatService } from '../../services/estimat.service';

@Component({
  selector: 'app-panel-gallery',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './panel-gallery.component.html',
  styleUrl: './panel-gallery.component.css'
})
export class PanelGalleryComponent {



  public deleteButon: any;

  public constructor (public _estimatService: EstimatService){}

  deletePhoto(index: number) {
      this._estimatService.getImages().splice(index, 1); // Elimina la foto del arreglo
  }

}
