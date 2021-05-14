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

  test('Exist components' , ()=>{

    expect(screen.findByRole('title')).toBeTruthy();
    expect(screen.findByPlaceholderText('Enter email')).toBeTruthy();
    expect(screen.findByPlaceholderText('Enter password')).toBeTruthy();
    expect(screen.findByRole('button')).toBeTruthy();
  })

  test("Show msg incorrect user" ,async()=>{

    await render(LoginComponent, {

      componentProperties:
      {
        errorLogin: true
      }
      ,
      imports:[AppModule]
    });

    expect(await screen.getByText('Incorrect username and/or password')).toBeInTheDocument();
     
    })

});
 