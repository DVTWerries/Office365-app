import { TestBed } from '@angular/core/testing';

import { CalendeEventsService } from './calendar-events.service';

describe('CalendeEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendeEventsService = TestBed.get(CalendeEventsService);
    expect(service).toBeTruthy();
  });
});
