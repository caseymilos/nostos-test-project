import { WeatherForecast} from "../../core/interfaces/forecast";
import {createReducer, on} from "@ngrx/store";
import {loadForecast} from "./forecast.actions";

export interface ForecastState {
  items: WeatherForecast[];
  selected: number | undefined;
  loading: boolean;
  loaded: boolean;
}

export const initialState: ForecastState = {
  items: [],
  selected: undefined,
  loading: true,
  loaded: false,
};

export const forecastReducer = createReducer(
  initialState,

  on(loadForecast, (state, { forecast }) => {
    return {
      ...state,
      items: forecast,
      loading: false,
      loaded: true,
    };
  })
);
