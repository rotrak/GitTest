import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private contador=0;

  constructor() { }


  increment()
  {
    this.contador = this.contador+1;
  }
  decrement()
  {
    this.contador=this.contador-1;
  }

  getValue()
  {
    return this.contador;
  }

}
