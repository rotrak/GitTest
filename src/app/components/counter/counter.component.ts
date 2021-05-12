import { Component, OnInit } from '@angular/core';
import { ContadorService } from 'src/app/services/contador.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(  public contService:ContadorService) { }

  ngOnInit(): void {
  }

}
