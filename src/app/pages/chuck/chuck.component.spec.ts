import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckComponent } from './chuck.component';
import { ChuckService } from '../../services/chuck.service';
import { createMock } from '@testing-library/angular/jest-utils';

import { fireEvent, render, screen} from '@testing-library/angular';
import { AppModule } from '../../app.module';
import { of } from 'rxjs';

describe('ChuckComponent', () => {


  test('Check all fields',async()=>{

    let fakePerson = {
      "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "value" : "Chuck Norris is good"
      };
  
     await render(ChuckComponent, {
      componentProviders: [
      ],
      componentProperties:{
        chuck: fakePerson
      },
      imports:[AppModule]
    });

    expect(screen.getByText(fakePerson.value)).toBeTruthy();
    expect(screen.getByTestId('img')).toBeTruthy();
    expect(screen.getByTestId('botonCargar')).toBeTruthy();

  })
  test('Check buttons', async ()=>{
    
    const people = createMock(ChuckService);
    let fakePerson = {
      "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "value" : "Chuck Norris recently whipped the SHIT outta Quinten Tarantino"
      };
    let fakePerson2 = {
      "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "value" : "Chuck Norris is good"
      };
    let fakePerson3 = {
      "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "value" : "Chuck Norris is good"
      };

    people.getFrase.mockImplementation(() => of(fakePerson));

     await render(ChuckComponent, {
      componentProviders: [
        {
          provide: ChuckService,
          useValue: people,
        },
      ],
      componentProperties:{
        chuck: fakePerson
      },
      imports:[AppModule]
    });

    expect(screen.getByText(fakePerson.value)).toBeTruthy();

    people.getFrase.mockImplementation(() => of(fakePerson2));
    fireEvent.click(screen.getByTestId('botonCargar'));
     
    expect(screen.getByText(fakePerson2.value)).toBeTruthy();

    people.getFrase.mockImplementation(() => of(fakePerson3));
    fireEvent.click(screen.getByTestId('botonCargar'));
     
    expect(screen.getByText(fakePerson3.value)).toBeTruthy();
  });
});
