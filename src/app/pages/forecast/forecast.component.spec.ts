import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectForecastItems } from '../../store/forecast/forecast.selectors';
import * as mockData from '../../../assets/mock-response-data';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async () => {
    class StoreMock {
      select = jasmine.createSpy().and.returnValue(of({}));
      dispatch = jasmine.createSpy();
      pipe = jasmine.createSpy().and.returnValue(of('success'));
    }
    await TestBed.configureTestingModule({
      declarations: [ForecastComponent],
      imports: [StoreModule],
      providers: [
        {
          provide: Store,
          useValue: StoreMock,
        },
        provideMockStore(),
      ],
    }).compileComponents();

    await TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
