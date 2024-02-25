import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INew } from '../../interfaces/estimat.interface';
import { EstimatService } from '../../services/estimat.service';

@Component({
  selector: 'app-panel-news',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './panel-news.component.html',
  styleUrl: './panel-news.component.css'
})
export class PanelNewsComponent implements OnInit {

public news: INew[] = [];

constructor(private _estimatService: EstimatService) { }

ngOnInit(): void {
  
}

create():void{
  console.log(this.news);
}


}
