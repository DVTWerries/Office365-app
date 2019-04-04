import { Component, Input } from '@angular/core';
import { CalendarEvent } from '../Modals/Events/events';

@Component({
  selector: 'app-calender-events',
  templateUrl: './calender-events.component.html',
  styleUrls: ['./calender-events.component.scss']
})

export class CalenderEventsComponent {

  private fromDate: string;
  private tillDate: string;
  private events: CalendarEvent[] = [];
  public filteredEvents: CalendarEvent[]

  constructor() { }

}
