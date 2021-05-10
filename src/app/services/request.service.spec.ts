
import { TestBed, async } from '@angular/core/testing';

import { RequestService } from './request.service';
import { AppModule } from '../app.module';

describe('RequestService', () => {
  let service: RequestService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers:[],
      imports:[AppModule]
    });
    service = TestBed.inject(RequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
