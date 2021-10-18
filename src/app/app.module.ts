import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.reducers';
import { ForecastEffects } from './store/forecast/forecast.effects';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CITIES } from './core/constants';
import { DatePipe } from '@angular/common';
import { ForecastDialogComponent } from './components/forecast-dialog/forecast-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { DayFormattingModule } from './core/utils/day-formatting/day-formatting.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';

@NgModule({
  declarations: [AppComponent, ForecastDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([ForecastEffects]),
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    DayFormattingModule,
    ToolbarModule,
  ],
  providers: [
    DatePipe,
    {
      provide: CITIES,
      useValue: ['London', 'Paris', 'Belgrade', 'Berlin', 'Rome'],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
