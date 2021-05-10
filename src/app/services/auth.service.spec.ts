import { TestBed, async } from '@angular/core/testing';
import { AuthService } from './auth.service';import { AppModule } from '../app.module';


describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers:[],
      imports:[AppModule]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
