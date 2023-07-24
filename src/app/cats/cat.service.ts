import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../shared/models/Cat.model';
@Injectable({
  providedIn: 'root',
})
export class CatService {
  private serverUrl = 'http://localhost:3000/data';
  constructor(private http: HttpClient) {}
  getCats() {
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