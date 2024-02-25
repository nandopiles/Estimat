import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INew } from '../../interfaces/estimat.interface';
import { EstimatService } from '../../services/estimat.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel-news',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './panel-news.component.html',
  styleUrl: './panel-news.component.css'
})
export class PanelNewsComponent implements OnInit {

public news: INew[] = [];

constructor(private _estimatService: EstimatService) { }

  newsForm = new FormGroup({
    id: new FormControl('0'),
    title: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
  });
  

createNew():void{
  const newsData = this.newsForm.value;
  this._estimatService.insertNews(newsData).subscribe();
}

ngOnInit(): void {
  
}
}
