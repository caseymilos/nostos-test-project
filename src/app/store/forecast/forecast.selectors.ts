import {AppState} from "../app.reducers";
import {ForecastState} from "./forecast.reducers";
import {createSelector} from "@ngrx/store";

export const selectForecastState = (state: AppState) => state.forecast;
export const selectForecastItems = createSelector(selectForecastState, (state: ForecastState) => state.items);
export const selectForecastLoadedStatus = createSelector(selectForecastState, (state: ForecastState) => state.loaded);
export const selectForecastLoadingStatus = createSelector(selectForecastState, (state: ForecastState) => state.loading);
