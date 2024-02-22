import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favs, User } from '../interfaces/cardInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class EstimatService {

  constructor(public  http: HttpClient) {}

    public getCardsInfo():Observable<ICardInfo[]>{
      return this.http.get<ICardInfo[]>();
    }

    public getUsers():Observable<User[]>{
      return this.http.get<User[]>('');
    }
    public getFavs():Observable<Favs[]>{
      return this.http.get<Favs[]>();
    }

    public getNews():Observable<News[]>{
      return this.http.get<News[]>();
    }
}
