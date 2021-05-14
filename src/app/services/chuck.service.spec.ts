import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { ChuckService } from './chuck.service';

describe('ChuckService', () => {
  let service: ChuckService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[AppModule]
    });
    service = TestBed.inject(ChuckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
