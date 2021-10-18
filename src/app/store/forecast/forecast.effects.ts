import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ForecastService} from "../../services/forecast.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {initForecast, loadForecast} from "./forecast.actions";
import {EMPTY} from "rxjs";

@Injectable()
export class ForecastEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initForecast),
      mergeMap(() =>
        {
          this.forecastService.readAllForecast();
          return this.forecastService.cities$.asObservable().pipe(
            map((forecast) => loadForecast({ forecast })),
            catchError(() => EMPTY)
          )
        }
      )
    )
  );
  constructor(private actions$: Actions, private forecastService: ForecastService) {}

}
