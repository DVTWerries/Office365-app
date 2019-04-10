import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarEvent, CalendarEventsResponse } from '../modals/events/events';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<CalendarEventsResponse>(`${baseUrl}/me/events?$select=organizer,attendees,start,end,location`).pipe(
      map(x => x.value)
    );
  }

}
