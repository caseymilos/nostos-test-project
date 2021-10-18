import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { initForecast } from '../../store/forecast/forecast.actions';
import {
  selectForecastItems,
  selectForecastLoadedStatus,
  selectForecastLoadingStatus,
} from '../../store/forecast/forecast.selectors';
import { BaseDirective } from '../../core/bsae.directive';
import { takeUntil } from 'rxjs/operators';
import { Forecastday, WeatherForecast } from '../../core/interfaces/forecast';

@Component({
  selector: 'ntp-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent extends BaseDirective implements OnInit {
  forecast: WeatherForecast[] = [];
  hours: Forecastday[] = [];
  loadingForecast = true;

  constructor(private store: Store<AppState>) {
    super();
  }

  ngOnInit(): void {
    this.loadingForecast = true;

    this.store
      .select(selectForecastLoadedStatus)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((loaded) => {
        if (!loaded) {
          this.store.dispatch(initForecast());
        }
      });
    this.store
      .select(selectForecastItems)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((response) => {
        this.forecast = response;
      });
    this.store
      .select(selectForecastLoadingStatus)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((loading) => {
        this.loadingForecast = loading;
      });
  }
}
