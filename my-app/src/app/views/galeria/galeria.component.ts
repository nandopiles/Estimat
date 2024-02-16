import { Component } from '@angular/core';
import { ImagenesGaleriaComponent } from "../../components/imagenes-galeria/imagenes-galeria.component";

@Component({
    selector: 'app-galeria',
    standalone: true,
    templateUrl: './galeria.component.html',
    styleUrl: './galeria.component.css',
    imports: [ImagenesGaleriaComponent]
})
export class GaleriaComponent {

}
