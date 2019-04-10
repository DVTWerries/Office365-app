import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '../Modals/events/events';
import { CalendeEventsService } from '../services/calendar-events.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-calender-events',
  templateUrl: './calender-events.component.html',
  styleUrls: ['./calender-events.component.scss']
})

export class CalenderEventsComponent implements OnInit {

  calendarEvents: CalendarEvent[];

  constructor(private calendarEventsApi: CalendeEventsService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'event',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-event-24px.svg'));
    iconRegistry.addSvgIcon(
      'location',
      sanitizer.bypassSecurityTrustResourceUrl('assets/67347.svg'));
    iconRegistry.addSvgIcon(
      'start-date',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-access_time-24px.svg'));
    iconRegistry.addSvgIcon(
      'end-date',
      sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-timer-24px.svg'));
  }

  ngOnInit() {
    this.calendarEventsApi.getCalenderEvents().subscribe(calendarEvents => {
      this.calendarEvents = calendarEvents;
      console.log(this.calendarEvents);
    });
    
  }

}
