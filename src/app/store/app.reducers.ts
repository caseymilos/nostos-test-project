import {ActionReducer, ActionReducerMap} from "@ngrx/store";
import {forecastReducer, ForecastState} from "./forecast/forecast.reducers";

export interface AppState {
  forecast: ForecastState;
}

export const reducers: ActionReducerMap<AppState> = {
  forecast: forecastReducer as any,
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => reducer(state, action);
}
