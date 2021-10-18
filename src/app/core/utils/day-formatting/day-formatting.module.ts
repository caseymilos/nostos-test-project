import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayFormattingPipe } from './day-formatting.pipe';

@NgModule({
  declarations: [DayFormattingPipe],
  exports: [DayFormattingPipe],
  imports: [CommonModule],
})
export class DayFormattingModule {}
