import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastComponent } from './forecast.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ForecastCardModule} from "../../components/forecast-card/forecast-card.module";


@NgModule({
  declarations: [
    ForecastComponent
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ForecastCardModule
  ]
})
export class ForecastModule { }
