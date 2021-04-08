import { Component, OnDestroy } from '@angular/core';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pocCypress';
  loading = false;

  constructor(public rqService: RequestService) {
    this.rqService.getLoading().subscribe(value => {
      this.loading = value;
    })
  }

}
