import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favs, INews, User } from '../interfaces/estimat.interface';

@Injectable({
  providedIn: 'root'
})
export class EstimatService {

  private urlAPI: string = 'http://localhost:8000/';

  constructor(public http: HttpClient) { }

  /**
   * Gets all the news from the API.
   * @returns {INews[]}
   */
  public getNews(): Observable<INews[]> {
    const urlGetAllNews: string = `${this.urlAPI}list/news`;

    return this.http.get<INews[]>(urlGetAllNews);
  }

  /* public getCardsInfo():Observable<ICardInfo[]>{
    return this.http.get<ICardInfo[]>();
  }

  public getUsers():Observable<User[]>{
    return this.http.get<User[]>('');
  }
  public getFavs():Observable<Favs[]>{
    return this.http.get<Favs[]>();
  } */

}
