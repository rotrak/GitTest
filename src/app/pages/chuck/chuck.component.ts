import { Component, OnInit } from '@angular/core';
import { ChuckService } from '../../services/chuck.service';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  chuck:any;

  constructor(private chuckService: ChuckService) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar()
  {
    this.chuckService.getFrase().subscribe(a=>{
      this.chuck = a;
    })
  }

}
