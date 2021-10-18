import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WeatherForecast } from '../../core/interfaces/forecast';

@Component({
  selector: 'ntp-forecast-dialog',
  templateUrl: './forecast-dialog.component.html',
  styleUrls: ['./forecast-dialog.component.scss'],
})
export class ForecastDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ForecastDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { forecast: WeatherForecast }
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
