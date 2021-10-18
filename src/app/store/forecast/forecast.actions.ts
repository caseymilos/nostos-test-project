import {createAction, props} from "@ngrx/store";
import {WeatherForecast} from "../../core/interfaces/forecast";

export const initForecast = createAction('[Forecast] Init');
export const loadForecast = createAction('[Forecast] Load', props<{ forecast: WeatherForecast[] }>());
