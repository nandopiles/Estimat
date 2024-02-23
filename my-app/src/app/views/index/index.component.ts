import { Component } from '@angular/core';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';
import { ImgIndexCardComponent } from '../../components/index/img-index-card/img-index-card.component';
import { DescriptionIndexCardComponent } from '../../components/index/description-index-card/description-index-card.component';
import { ICardInfo } from '../../interfaces/estimat.interface';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [JumbotronComponent, ImgIndexCardComponent, DescriptionIndexCardComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  public infoCards: ICardInfo[] = [
    {
      title: 'Abrázate, abrázanos.',
      text: `Somos una asociación de mujeres afectadas de cáncer de mama que contamos con el respaldo de
      profesionales sanitarios. Queremos mejorar tu calidad de vida y minimizar los efectos de la enfermedad. Si
      piensas que podemos ayudarte, contacta con nosotras.`,
      img: 'assets/img/title1.png'
    }
  ]
}
