import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragulaService {

  public cancel: EventEmitter<any> = new EventEmitter();
  public cloned: EventEmitter<any> = new EventEmitter();
  public drag: EventEmitter<any> = new EventEmitter();
  public dragend: EventEmitter<any> = new EventEmitter();
  public drop: EventEmitter<any> = new EventEmitter();
  public out: EventEmitter<any> = new EventEmitter();
  public over: EventEmitter<any> = new EventEmitter();
  public remove: EventEmitter<any> = new EventEmitter();
  public shadow: EventEmitter<any> = new EventEmitter();
  public dropModel: EventEmitter<any> = new EventEmitter();
  public removeModel: EventEmitter<any> = new EventEmitter();
  private events: Array<string> = [
    'cancel',
    'cloned',
    'drag',
    'dragend',
    'drop',
    'out',
    'over',
    'remove',
    'shadow',
    'dropModel',
    'removeModel'
  ];

  constructor() { }
}
