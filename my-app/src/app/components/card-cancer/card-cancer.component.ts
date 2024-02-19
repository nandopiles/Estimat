import { Component, Input } from '@angular/core';
import { CardImageCancerComponent } from '../card-image-cancer/card-image-cancer.component';
import { CardTextCancerComponent } from "../card-text-cancer/card-text-cancer.component";

@Component({
    selector: 'app-card-cancer',
    standalone: true,
    templateUrl: './card-cancer.component.html',
    styleUrl: './card-cancer.component.css',
    imports: [CardImageCancerComponent, CardTextCancerComponent]
})
export class CardCancerComponent {


}
