import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { CalendarEvent, CalenderEventsResponse } from '../Modals/Events/events';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';
import { map } from 'rxjs/operators';

const baseUrl = 'https://graph.microsoft.com/v1.0';

@Injectable({
  providedIn: 'root'
})
export class CalendeEventsService {

  constructor(private http: HttpClient) { }

  // getCalenderEvent(): Observable<CalendarEvent> {
  //   return this.http.post<CalendarEvent>(`${baseUrl}/me/calendars`, '');
  // }

  getCalenderEvents(): Observable<CalendarEvent[]> {
    return this.http.get<CalenderEventsResponse>(`${baseUrl}/me/events?$select=organizer,attendees,start,end,location`).pipe(
      map(x => x.value)
    );
  }

}
