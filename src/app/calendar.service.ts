import { Injectable } from '@angular/core';

import { Calendar } from '@awesome-cordova-plugins/calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  async setup() {
    const calendars = await Calendar.listCalendars();
    console.log(calendars);
    const r = await Calendar.createCalendar({ calendarName: 'my-events', calendarColor: '#00FF00' });
    console.log(r); // will return "OK, Calendar already exists"
    const today = new Date();
    const start = new Date(today.setDate(today.getDate() + 1));
    const hrs = 1;
    const end = new Date(today.setTime(start.getTime() + (hrs * 60 * 60 * 1000)));
    const calendarId = await Calendar.createEvent('Test Party', 'The Location', 'This is some additional notes about the event', start, end)
    console.log(calendarId);
  }
}
