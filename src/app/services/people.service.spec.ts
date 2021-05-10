import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';

import { PeopleService } from './people.service';
import { AppModule } from '../app.module';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers:[],
      imports:[AppModule]
    });
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
