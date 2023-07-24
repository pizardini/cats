import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../shared/models/Cat.model';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root',
})
export class CatService {
  private serverUrl = 'http://localhost:3000/cats/';
  constructor(private http: HttpClient) {}
  
  // getCats() {
  //   return this.http.get<Cat[]>(this.serverUrl);
  // }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.serverUrl);
  }

  postCat() {}

  putCat() {}

  deleteCat() {}

  isLoggedIn(): boolean {
    console.log('chamou isLoggedIn');

    return false;
  }

}