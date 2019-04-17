import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page , NotesEventsResponse } from '../modals/notes/notes';

const baseUrl = 'https://graph.microsoft.com/v1.0';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/html',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Page[]> {
    return this.http.get<NotesEventsResponse>(`${baseUrl}/me/onenote/pages`).pipe(
      map(x => x.value)
    );
  }

  getNoteContent(contentUrl: string): Observable<string> {
    return this.http.get(contentUrl, {responseType: 'text'});
  }

  saveNote(page: Page, template: string): Observable<Page> {
    return this.http.post<Page>(`${baseUrl}/me/onenote/sections/${page.parentSection.id}/pages`, template, httpOptions);
  }
}
