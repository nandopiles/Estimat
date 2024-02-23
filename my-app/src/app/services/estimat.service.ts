import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INew, IUser } from '../interfaces/estimat.interface';

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
  public getNews(): Observable<INew[]> {
    const urlGetAllNews: string = `${this.urlAPI}list/news`;

    return this.http.get<INew[]>(urlGetAllNews);
  }

  /**
   * Gets all the users from the API.
   * @returns {INews[]}
   */
  public getUsers(): Observable<IUser[]> {
    const urlGetAllUsers: string = `${this.urlAPI}list/users`;

    return this.http.get<IUser[]>(urlGetAllUsers);
  }
}
