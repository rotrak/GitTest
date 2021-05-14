import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http : HttpClient) { }

  getFrase()
  {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }

}
