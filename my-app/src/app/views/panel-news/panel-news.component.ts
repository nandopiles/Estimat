import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INew } from '../../interfaces/estimat.interface';
import { EstimatService } from '../../services/estimat.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-panel-news',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './panel-news.component.html',
  styleUrl: './panel-news.component.css',
})
export class PanelNewsComponent {
  newsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public _estimatService: EstimatService) {
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });
  }

  addNews(): void {
    if (this.newsForm.invalid) {
      return;
    }

    const newNews: INew = {
      id: this.newsForm.value.i,
      title: this.newsForm.value.title,
      description: this.newsForm.value.description,
      image: this.newsForm.value.imageUrl
    };

    this._estimatService.addNews(newNews).subscribe(response => {
      console.log('Noticia agregada con éxito', response);
      this.newsForm.reset();
    });
  }
}
