import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { fireEvent, render, screen} from '@testing-library/angular';
import { LoginComponent } from './login.component';
import userEvent from '@testing-library/user-event';
import { AppModule } from '../../app.module';
import '@testing-library/jest-dom';
import { AuthService } from '../../services/auth.service';
import { createMock } from '@testing-library/angular/jest-utils';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  // let component: LoginComponent;
  // let fixture: ComponentFixture<LoginComponent>;

  // beforeEach((() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ LoginComponent ],
  //     providers:[],
  //     imports:[AppModule]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  test('Exist components' , ()=>{

    expect(screen.findByRole('title')).toBeTruthy();
    expect(screen.findByPlaceholderText('Enter email')).toBeTruthy();
    expect(screen.findByPlaceholderText('Enter password')).toBeTruthy();
    expect(screen.findByRole('button')).toBeTruthy();
  })

  test("Show incorrect user" ,async()=>{

    const auth = createMock(AuthService);
    let fakeAuth = [
      {message:'error'}
    ];

    auth.login.mockImplementation(() => of(fakeAuth));

    await render(LoginComponent, {
      componentProviders: [
        {
          provide: AuthService,
          useValue: fakeAuth,
        },
        
      ],
      componentProperties:
      {
        errorLogin: true
      }
      ,
      imports:[AppModule]
    });
    
    // const userInput = screen.getByPlaceholderText('Enter email');
    // const passInput = screen.getByPlaceholderText('Enter password');
    // const buttonSubmit = screen.getByRole('submit');

    // expect(userInput).toBeInTheDocument();
    // expect(passInput).toBeInTheDocument();

    // userEvent.type(userInput,'usuarioMal1');
    // userEvent.type(passInput,'usuarioMal1');
   
    // expect(userInput).toHaveValue('usuarioMal1');
    // expect(passInput).toHaveValue('usuarioMal1');
   
    // fireEvent.click(buttonSubmit);

    expect(await screen.getByText('Incorrect username and/or password')).toBeInTheDocument();
    
    })

});
 