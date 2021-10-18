import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hour, WeatherForecast } from '../../core/interfaces/forecast';
import * as dayjs from 'dayjs';

@Component({
  selector: 'ntp-forecast-dialog',
  templateUrl: './forecast-dialog.component.html',
  styleUrls: ['./forecast-dialog.component.scss'],
})
export class ForecastDialogComponent {
  get forecastDayHours(): Hour[] | undefined {
    return this.data?.forecast?.forecast?.forecastday[0].hour.filter(
      (item) => dayjs(item.time).diff(new Date(), 'minute') > 0
    );
  }

  constructor(
    public dialogRef: MatDialogRef<ForecastDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { forecast: WeatherForecast }
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
