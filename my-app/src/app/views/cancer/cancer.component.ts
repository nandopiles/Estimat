import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CarrouselComponent } from "../../components/carrousel/carrousel.component";

@Component({
    selector: 'app-cancer',
    standalone: true,
    templateUrl: './cancer.component.html',
    styleUrl: './cancer.component.css',
    imports: [HeaderComponent, CarrouselComponent]
})
export class CancerComponent {

}
