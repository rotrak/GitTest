import { TestBed } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { ContadorService } from './contador.service';

describe('ContadorService', () => {
  let service: ContadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[]
    });
    service = TestBed.inject(ContadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
