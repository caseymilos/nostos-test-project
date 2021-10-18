import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as calendar from 'dayjs/plugin/calendar';

@Pipe({
  name: 'dayFormatting',
})
export class DayFormattingPipe implements PipeTransform {
  transform(date: string | undefined): string | undefined {
    dayjs.extend(calendar);
    return dayjs(date).calendar(null, {
      lastDay: '[Yesterday]',
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      lastWeek: '[Last] dddd',
      nextWeek: '[Next] dddd',
      sameElse: 'MMMM DD YYYY',
    });
  }
}
