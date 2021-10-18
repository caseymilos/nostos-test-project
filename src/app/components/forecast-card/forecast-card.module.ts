import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastCardRoutingModule } from './forecast-card-routing.module';
import { ForecastCardComponent } from './forecast-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
    declarations: [
        ForecastCardComponent
    ],
    exports: [
        ForecastCardComponent
    ],
  imports: [
    CommonModule,
    ForecastCardRoutingModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class ForecastCardModule { }
