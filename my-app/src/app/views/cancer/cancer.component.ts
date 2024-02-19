import { Component } from '@angular/core';  
import { HeaderComponent } from '../../components/header/header.component';
import { CarrouselComponent } from '../../components/carrousel/carrousel.component';
import { CardImageCancerComponent } from '../../components/card-image-cancer/card-image-cancer.component';
import { CardCancerComponent } from "../../components/card-cancer/card-cancer.component";

@Component({
    selector: 'app-cancer',
    standalone: true,
    templateUrl: './cancer.component.html',
    styleUrl: './cancer.component.css',
    imports: [HeaderComponent, CarrouselComponent, CardImageCancerComponent, CardCancerComponent]
})
export class CancerComponent {

}
