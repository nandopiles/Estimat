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

  /**
   * Deletes the User selected by the user.
   * @param {number} userId
   * @returns {void}
   */
  public deleteUser(userId: number): Observable<void> {
    const urlDeleteUser = `${this.urlAPI}delete/user/${userId}`;

    return this.http.delete<void>(urlDeleteUser);
  }

  /**
   * Gets the user linked by the id passed by parameter.
   * @param {number} userId
   * @returns {IUser}
   */
  public getUserById(userId: number): Observable<IUser> {
    const urlFindUserById = `${this.urlAPI}list/user/${userId}`;

    return this.http.get<IUser>(urlFindUserById);
  }

  /**
   * Inserts a new user with the info passed by parameter.
   * @param {IUser} insertUser
   * @returns {IUser}
   */
  public insertUser(insertUser: IUser): Observable<IUser> {
    const urlInsertUser = `${this.urlAPI}insert/user`

    return this.http.post<IUser>(urlInsertUser, insertUser);
  }
}
