import { Component, Input } from '@angular/core';
import { WeatherForecast } from '../../core/interfaces/forecast';
import { MatDialog } from '@angular/material/dialog';
import { ForecastDialogComponent } from '../forecast-dialog/forecast-dialog.component';

@Component({
  selector: 'ntp-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss'],
})
export class ForecastCardComponent {
  @Input() weatherForecast!: WeatherForecast;

  constructor(private dialog: MatDialog) {}

  openForecastDialog(weatherForecast: WeatherForecast) {
    const dialogRef = this.dialog.open(ForecastDialogComponent, {
      width: '700px',
      backdropClass: 'ntp-dialog-backdrop',
      data: {
        forecast: weatherForecast,
      },
    });
    dialogRef.afterClosed().subscribe();
  }
}
