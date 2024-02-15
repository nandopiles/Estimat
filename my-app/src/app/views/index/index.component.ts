import { Component } from '@angular/core';
import { JumbotronComponent } from '../../components/jumbotron/jumbotron.component';
import { ImgIndexCardComponent } from '../../components/index/img-index-card/img-index-card.component';
import { DescriptionIndexCardComponent } from '../../components/index/description-index-card/description-index-card.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [JumbotronComponent, ImgIndexCardComponent, DescriptionIndexCardComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
