import { Component } from '@angular/core';
import { JumbotronNoticiasComponent } from "../jumbotron-noticias/jumbotron-noticias.component";
import { CardNoticiasComponent } from "../card-noticias/card-noticias.component";

@Component({
    selector: 'app-noticias',
    standalone: true,
    templateUrl: './noticias.component.html',
    styleUrl: './noticias.component.css',
    imports: [JumbotronNoticiasComponent, CardNoticiasComponent]
})
export class NoticiasComponent {

}
