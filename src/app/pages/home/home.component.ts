import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { RequestService } from '../../services/request.service';
import { AuthService } from '../../services/auth.service';
import { ContadorService } from '../../services/contador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clicked = false;
  people = [];
  @Input() contador=0;

  constructor(private peopleService: PeopleService, 
    private reqService: RequestService,
     private authService: AuthService
   ) { }

  ngOnInit(){

  }
  
  onClick(): void {
    if (!this.clicked) {
      this.reqService.setLoading(true);
      this.peopleService.getPersons().subscribe(data => {
        this.people = data;
        this.clicked = true;
        this.reqService.setLoading(false);
      })
    } else {
      this.clicked = false;
    }
    
  }

  deletePerson() {
    if (this.people.length > 0) {
      this.people.pop();
    }
  }

 
}
