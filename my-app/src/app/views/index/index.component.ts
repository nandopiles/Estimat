import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, JumbotronComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
