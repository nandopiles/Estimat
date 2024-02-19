import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cancer } from '../interfaces/cancer.interface';

@Injectable({
  providedIn: 'root'
})
export class CancerService {

  constructor(public http: HttpClient) { }

  public getProducts():Observable<Cancer[]>{
    return this.http.get<Cancer[]>('');
  }
}
