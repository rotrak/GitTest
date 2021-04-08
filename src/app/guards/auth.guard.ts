import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {take, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
      return this.authService.isAuth.pipe(
        take(1),
        switchMap(isAuth => {
            return of(isAuth)
        }),
        tap(isAuth => {
          if (!isAuth) {
            this.router.navigate(['/login']);
          }
        })
      )
  }
  
}
