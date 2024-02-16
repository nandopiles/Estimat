import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-nosotros',
    standalone: true,
    templateUrl: './nosotros.component.html',
    styleUrl: './nosotros.component.css',
    imports: [HeaderComponent]
})
export class NosotrosComponent {

}
