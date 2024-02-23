import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-panel-gallery',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './panel-gallery.component.html',
  styleUrl: './panel-gallery.component.css'
})
export class PanelGalleryComponent {
  public imagesGallery: string[] = [
    '../../../assets/imagesGallery/gallery.jpg',
    '../../../assets/imagesGallery/gallery2.jpg',
    '../../../assets/imagesGallery/gallery3.jpg',
    '../../../assets/imagesGallery/gallery4.jpg',
    '../../../assets/imagesGallery/gallery5.jpg',
    '../../../assets/imagesGallery/gallery6.jpg',
    '../../../assets/imagesGallery/gallery7.jpg',
    '../../../assets/imagesGallery/gallery8.jpg',
    '../../../assets/imagesGallery/gallery9.jpg',
    '../../../assets/imagesGallery/gallery10.jpg',
    '../../../assets/imagesGallery/gallery11.jpg',
    '../../../assets/imagesGallery/gallery12.jpg',
    '../../../assets/imagesGallery/gallery13.jpg',
    '../../../assets/imagesGallery/gallery14.jpg',
    '../../../assets/imagesGallery/gallery15.jpg',
    '../../../assets/imagesGallery/gallery16.jpg',
    '../../../assets/imagesGallery/gallery17.jpg',
    '../../../assets/imagesGallery/gallery18.jpg',
    '../../../assets/imagesGallery/gallery19.jpg',
    '../../../assets/imagesGallery/gallery20.jpg',
    '../../../assets/imagesGallery/gallery21.jpg',
    '../../../assets/imagesGallery/gallery22.jpg',
    '../../../assets/imagesGallery/gallery23.jpg',
    '../../../assets/imagesGallery/gallery24.jpg'
  ]

  public deleteButon: any;
}
