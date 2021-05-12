import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { fireEvent, render, screen} from '@testing-library/angular';
import { AppModule } from '../../app.module';
import '@testing-library/jest-dom';
import { provideMock, Mock, createMock } from '@testing-library/angular/jest-utils';

import { PeopleService } from '../../services/people.service';

import { of } from 'rxjs';
import userEvent from '@testing-library/user-event';

describe('HomeComponents', () => {
// describe('ContadorService', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach((() => {
//     TestBed.configureTestingModule({
//       declarations: [  ],
//       providers:[],
//       imports:[AppModule]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

   test('Check row', async()=>{

    const people = createMock(PeopleService);
    let fakePerson = [
      {name:'Sergio', age: 21},
      {name:'Raul', age: 22},
      {name:'Roberto', age: 23},
      {name:'Pablo', age: 23},
      {name:'Alberto', age: 23},
    ];
    people.getPersons.mockImplementation(() => of(fakePerson));

    await render(HomeComponent, {
      componentProviders: [
        {
          provide: PeopleService,
          useValue: people,
        },
        
      ],
      imports:[AppModule]
    });

    
    const button = screen.getByText('Click here');
    fireEvent.click(button);
    
    const filas = screen.getAllByRole('fila');
    const bDelete = screen.getByTestId('botonBorrar');

    expect(screen.getAllByRole('fila').length).toEqual(5);

     fireEvent.click(bDelete);
     fireEvent.click(bDelete);
    
    
     expect(screen.getAllByRole('fila').length).toEqual(3);
    
     fireEvent.click(bDelete);
     fireEvent.click(bDelete);
    
     expect(screen.getAllByRole('fila').length).toEqual(1);
        
     fireEvent.click(bDelete);

    expect(screen.getByText('This is a danger alert—check it out!')).toBeTruthy();

  })

});