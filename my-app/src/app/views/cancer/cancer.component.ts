import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CarrouselComponent } from "../../components/carrousel/carrousel.component";
import { ICardInfo } from '../../interfaces/estimat.interface';
import { CancerCardComponent } from '../../components/cancer-card/cancer-card.component';

@Component({
    selector: 'app-cancer',
    standalone: true,
    templateUrl: './cancer.component.html',
    styleUrl: './cancer.component.css',
    imports: [HeaderComponent, CarrouselComponent, CancerCardComponent]
})
export class CancerComponent {
    public infoCards: ICardInfo[] = [
        {
            title: 'Cáncer de mama.',
            text: `Es una enfermedad maligna que se origina en las células de la
            glándula mamaria.Se caracteriza por un crecimiento anormal y descontrolado de estas células,
            formando un tumor que puede propagarse a tejidos cercanos o a otras partes del cuerpo a través
            del sistema linfático o sanguíneo.`,
            img: '/assets/img/pexels-photo-cd.png'
        },
        {
            title: 'Tratamiento.',
            text: `El tratamiento del cáncer de mama depende de varios factores, incluyendo el
            tipo de cáncer, su estadio, y la salud general de la paciente. Las opciones de tratamiento
            suelen incluir cirugía para extirpar el tumor, radioterapia para destruir las células
            cancerosas, quimioterapia para eliminar las células cancerosas en todo el cuerpo.`,
            img: '/assets/img/pexels-photo2.png'
        },
        {
            title: 'Impacto.',
            text: `El cáncer de mama puede tener un impacto significativo en la vida de quienes lo
            padecen y en sus seres queridos. Además del aspecto físico y médico, puede generar emociones
            como miedo, ansiedad, tristeza y frustración. El tratamiento puede ser agotador física y
            emocionalmente, y las preocupaciones sobre la reaparición del cáncer son frecuentes.`,
            img: '/assets/img/pexels-cupcakes.jpg'
        }
    ]
}
