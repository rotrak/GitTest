import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { fireEvent, render, screen} from '@testing-library/angular';

import userEvent from '@testing-library/user-event';
import { AppModule } from '../../app.module';
import '@testing-library/jest-dom';
import { provideMock, Mock, createMock } from '@testing-library/angular/jest-utils';
import { ContadorService } from '../../services/contador.service';
import { AuthService } from '../../services/auth.service';
import { PeopleService } from '../../services/people.service';
import { RequestService } from '../../services/request.service';

describe('CounterComponent', () => {
  // let component: CounterComponent;
  // let fixture: ComponentFixture<CounterComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ CounterComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CounterComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  
  it('Check num press buttons', async()=> {

    await render(CounterComponent, {
      componentProviders: [provideMock(ContadorService)],
      imports:[]
    });
    

    const incrementControl = screen.getByText('Incrementar' );
    const decrementControl = screen.getByText('Decrementar');
  
    fireEvent.click(incrementControl);
    fireEvent.click(incrementControl);
    fireEvent.click(decrementControl);
  
    const counterService = TestBed.inject(ContadorService) as Mock<ContadorService>;
    expect(counterService.increment).toHaveBeenCalledTimes(2);
    expect(counterService.decrement).toHaveBeenCalledTimes(1);

  })
  
  it('Check counter', async()=> {

    const counter = createMock(ContadorService);
    let fakeCounterValue = 50;
    counter.increment.mockImplementation(() => (fakeCounterValue += 10));
    counter.decrement.mockImplementation(() => (fakeCounterValue -= 10));
    counter.getValue.mockImplementation(() => fakeCounterValue);

    await render(CounterComponent, {
      componentProviders: [
        {
          provide: ContadorService,
          useValue: counter,
        },
      ],
    });

    const bIncrementar = screen.getByText('Incrementar');
    const bDecrementar = screen.getByText('Decrementar');
    const valorContador = screen.getByTestId('value');
    

    expect(valorContador).toHaveTextContent('50');
    
    fireEvent.click(bIncrementar);
    expect(valorContador).toHaveTextContent('60');

    fireEvent.click(bDecrementar);
    fireEvent.click(bDecrementar);
    expect(valorContador).toHaveTextContent('40');

  })

});
