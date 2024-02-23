import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INew } from '../interfaces/estimat.interface';

@Injectable({
  providedIn: 'root'
})
export class EstimatService {
  addNews(newNews: INew) {
    throw new Error('Method not implemented.');
  }

  private urlAPI: string = 'http://localhost:8000/';

  constructor(public http: HttpClient) { }

  /**
   * Gets all the news from the API.
   * @returns {INews[]}
   */

  public getNews(): Observable<INew[]> {
    const urlGetAllNews: string = `${this.urlAPI}list/news`;

    return this.http.get<INew[]>(urlGetAllNews);
  }

  public getInsertNews(): Observable<INew[]> {
    const urlInsertNews: string = `${this.urlAPI}/insert/news`;

    return this.http.get<INew[]>(urlInsertNews);
  }
  
}
