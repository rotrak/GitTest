import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private $loading = new BehaviorSubject<boolean>(false);
  constructor() { }

  public setLoading(state: boolean) {
    this.$loading.next(state);
  }

  public getLoading() {
    return this.$loading.asObservable();
  }
}
