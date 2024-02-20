import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CarrouselComponent } from "../../components/carrousel/carrousel.component";
import { ImgCancerCardComponent } from '../../components/cancer/img-cancer-card/img-cancer-card.component';
import { DescriptionCancerCardComponent } from '../../components/cancer/description-cancer-card/description-cancer-card.component';
import { ICardInfo } from '../../interfaces/cardInfo.interface';

@Component({
    selector: 'app-cancer',
    standalone: true,
    templateUrl: './cancer.component.html',
    styleUrl: './cancer.component.css',
    imports: [HeaderComponent, CarrouselComponent, DescriptionCancerCardComponent, ImgCancerCardComponent]
})
export class CancerComponent {
    public infoCards: ICardInfo[] = [
        {
            title: 'Cáncer de mama.',
            text: `Es una enfermedad maligna que se origina en las células de la
            glándula mamaria.Se caracteriza por un crecimiento anormal y descontrolado de estas células,
            formando un tumor que puede propagarse a tejidos cercanos o a otras partes del cuerpo a través
            del sistema linfático o sanguíneo.Es una de las formas más comunes de cáncer entre las mujeres,
            aunque también puede afectar a los hombres en menor medida.`,
            img: '/assets/img/title1.png'
        },
        {
            title: 'Tratamiento.',
            text: `El tratamiento del cáncer de mama depende de varios factores, incluyendo el
            tipo de cáncer, su estadio, y la salud general de la paciente. Las opciones de tratamiento
            suelen incluir cirugía para extirpar el tumor, radioterapia para destruir las células
            cancerosas, quimioterapia para eliminar las células cancerosas en todo el cuerpo, terapia
            hormonal para bloquear el crecimiento de las células cancerosas que son estimuladas por
            hormonas, y terapia dirigida que ataca específicamente las células cancerosas. El tratamiento
            puede ser combinación de estas opciones o individual, dependiendo del caso.`,
            img: '/assets/img/title1.png'
        },
        {
            title: 'Impacto.',
            text: `El cáncer de mama puede tener un impacto significativo en la vida de quienes lo
            padecen y en sus seres queridos. Además del aspecto físico y médico, puede generar emociones
            como miedo, ansiedad, tristeza y frustración. El tratamiento puede ser agotador física y
            emocionalmente, y las preocupaciones sobre la reaparición del cáncer son frecuentes. La
            enfermedad también puede afectar las relaciones personales, la vida laboral y la autoestima. Es
            fundamental contar con un sólido sistema de apoyo emocional y médico para hacer frente a los
            desafíos que presenta el cáncer de mama.`,
            img: '/assets/img/title1.png'
        }
    ]
}
