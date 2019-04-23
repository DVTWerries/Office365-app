import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private menuIsActiveSource = new BehaviorSubject(false);
  private titleSource = new BehaviorSubject("Home");
  currentMenuIsActive = this.menuIsActiveSource.asObservable();
  currentTitle = this.titleSource.asObservable();

  constructor() { }

  setMenuState(menuIsActive: boolean) {
    this.menuIsActiveSource.next(menuIsActive);
  }

  setTitle(title: string) {
    this.titleSource.next(title);
  }

  parseHtmlResponse(data: string) {
    console.log(data);
    let response = "";
    response = data.replace(/(?<=<title>).*(?=<\/title>)/gm, '');
    response = response.replace(/<(?:.|\n)*?>/gm, '');
    return response.trim();
  }
}
