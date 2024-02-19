import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-text-cancer',
  standalone: true,
  imports: [],
  templateUrl: './card-text-cancer.component.html',
  styleUrl: './card-text-cancer.component.css'
})
export class CardTextCancerComponent {
  @Input() title: string[] = ['Cáncer de mama.', 'Tratamiento.'];
  @Input() cardContent: string[] = ['Es una enfermedad maligna que se origina en las células de la glándula mamaria. Se caracteriza por un crecimiento anormal y descontrolado de estas células, formando un tumor que puede propagarse a tejidos cercanos o a otras partes del cuerpo a través del sistema linfático o sanguíneo. Es una de las formas más comunes de cáncer entre las mujeres, aunque también puede afectar a los hombres en menor medida.', 'El tratamiento del cáncer de mama depende de varios factores, incluyendo el tipo de cáncer, su estadio, y la salud general de la paciente. Las opciones de tratamiento suelen incluir cirugía para extirpar el tumor, radioterapia para destruir las células cancerosas, quimioterapia para eliminar las células cancerosas en todo el cuerpo, terapia hormonal para bloquear el crecimiento de las células cancerosas que son estimuladas por hormonas, y terapia dirigida que ataca específicamente las células cancerosas. El tratamiento puede ser combinación de estas opciones o individual, dependiendo del caso.'];


}
