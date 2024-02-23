import { Component, OnInit } from '@angular/core';
import { JumbotronNoticiasComponent } from "../../components/jumbotron-noticias/jumbotron-noticias.component";
import { CardNoticiasComponent } from "../../components/card-noticias/card-noticias.component";
import { EstimatService } from '../../services/estimat.service';
import { INew } from '../../interfaces/estimat.interface';

@Component({
    selector: 'app-noticias',
    standalone: true,
    templateUrl: './noticias.component.html',
    styleUrl: './noticias.component.css',
    imports: [JumbotronNoticiasComponent, CardNoticiasComponent]
})
export class NoticiasComponent implements OnInit {
    public news: INew[] = [
        {
            id: 0,
            title: 'Título',
            description: 'Descripción de la noticia.',
            image: 'https://via.placeholder.com/800x400'
        }
    ];

    public constructor(public _estimatService: EstimatService) { }

    /**
     * It'll be executed when the view will be loaded.
     * @returns {void}
     */
    public ngOnInit(): void {
        this._estimatService.getNews().subscribe((news) => {
            this.news = [];
            news.forEach((specificNew) => this.news.push(specificNew))
        });


    }
}
