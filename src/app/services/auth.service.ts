import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { endpoints } from '../constants/index';
import { RequestService } from './request.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sessionStarted = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    return this.http.post(`${environment.host}${endpoints.login}`, {username, password})
  }

  public startSession() {
    this.sessionStarted.next(true);
  }

  public closeSession() {
    this.sessionStarted.next(false);
  }

  get isAuth() {
    return this.sessionStarted.asObservable().pipe(
      map(user => {
        if (user) return !!user;
        else return false;
      })
    );
  }
}
