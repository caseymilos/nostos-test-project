import { TestBed } from '@angular/core/testing';

import { ForecastService } from './forecast.service';
import { CITIES } from '../core/constants';
import { HttpClientModule } from '@angular/common/http';

describe('ForecastService', () => {
  let service: ForecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: CITIES,
          useValue: ['London', 'Paris', 'Belgrade', 'Berlin', 'Rome'],
        },
      ],
    });
    service = TestBed.inject(ForecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
