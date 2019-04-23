import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should crearte note component', () => {
    expect(component).toBeTruthy();
  });

  it('should apply focus class when the user clicks on write a note element', () => {
    expect(component.inputFocusClass).toEqual('true');
  });

  it('should remove focus class when the user clicks save notes', () => {
    expect(component.inputFocusClass).toEqual('false');
  });

  it('should display new added note', () => {
    expect(component)
  });

  it('should display all the notes the user created', () => {
    expect(component)
  });
});
