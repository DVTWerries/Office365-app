import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private titleSource = new BehaviorSubject('Home');
  currentTitle = this.titleSource.asObservable();

  constructor() { }

  setTitle(title: string) {
    this.titleSource.next(title);
  }
}
