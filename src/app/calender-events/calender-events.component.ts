import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '../Modals/events/events';
import { CalendeEventsService } from '../services/calendar-events.service';
import { MatIconRegistry} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-calender-events',
  templateUrl: './calender-events.component.html',
  styleUrls: ['./calender-events.component.scss']
})

export class CalenderEventsComponent implements OnInit {

  // private fromDate: string;
  // private tillDate: string;
  // private events: CalendarEvent[] = [];
  // public filteredEvents: CalendarEvent[]

  calendarEvents: CalendarEvent[];

  constructor(private calendarEventsApi: CalendeEventsService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-close-24px.svg'));
  }

  ngOnInit() {
    this.calendarEventsApi.getCalenderEvents().subscribe(calendarEvents => this.calendarEvents = calendarEvents);
  }

}
 