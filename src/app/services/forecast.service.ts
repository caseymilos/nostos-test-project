import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {WeatherForecast} from "../core/interfaces/forecast";
import {CITIES} from "../core/constants";

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  cities$: BehaviorSubject<WeatherForecast[]> = new BehaviorSubject<WeatherForecast[]>([])
  fetchedCities: WeatherForecast[] = [];

  constructor(@Inject(CITIES) private cities: string[], private http: HttpClient) { }

  readAllForecast(): void {
    this.cities.forEach(city => {
      let params = new HttpParams()
      params = params.append('q', city);
      params = params.append('days', 3);
      params = params.append('key', 'aab699fe913140e28df141222211110');
      params = params.append('aqi', 'no');
      params = params.append('alerts', 'no');
      this.http.get<WeatherForecast>(`${environment.apiUrl}`, {params}).subscribe(response => {
        this.fetchedCities = Object.assign([], this.fetchedCities);
        this.fetchedCities.push(response);
        this.cities$.next(this.fetchedCities);
      })
    })
  }
}
