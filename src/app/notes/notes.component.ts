import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Page } from '../modals/notes/notes';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { DragulaService } from '../services/dragula.service';
import { UtilsService } from '../services/utils.service';
import { map, toArray, switchMap, mergeAll, switchAll, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: Page[];
  order: any;
  draft: Page;
  orderNotes: any;
  editNoteDraft: any;
  toEditNote: any;
  spinner: boolean;
  inputFocusClass: boolean;
  getNotesSubscription: Subscription;
  saveNoteSubscription: Subscription;
  emptyHtmlMsg: boolean;
  template: string;

  constructor(private dragulaService: DragulaService, private notesService: NotesService, private utilService: UtilsService) {
    this.notes = [];
    this.spinner = true;
    this.inputFocusClass = false;
    this.emptyHtmlMsg = false;
    this.draft = {
      id: '',
      createdDateTime: '',
      title: '',
      contentUrl: '',
      lastModifiedDateTime: '',
      parentSection: {
        id: '',
        displayName: ''
      }
    };
    this.toEditNote = null;
    this.editNoteDraft = {};
    this.order = [];
    this.orderNotes = [];

    dragulaService.dropModel.subscribe((value: any) => {
      this.onDropModel(value.slice(1));
    });
  }

  ngOnInit() {
    this.getNotesSubscription = this.getNotes();
  }

  getNotes() {
    this.notes = [];
    let note = [];
    let i = -1;
    return this.notesService.getNotes().pipe(
      mergeMap(pages => pages),
      tap(page => note.push(page)),
      map(page => this.notesService.getNoteContent(page.contentUrl)),
      mergeAll(),
      map(content => {
        i++;
        return {
          id: note[i].id,
          createdDateTime: note[i].createdDateTime,
          title: note[i].title,
          contentUrl: this.utilService.parseHtmlResponse(content),
          lastModifiedDateTime: note[i].lastModifiedDateTime,
          parentSection: note[i].parentSection
        }
      }),
    ).subscribe(note => {
      this.notes.push(note);
    })
  }

  ngOnDestroy() {
    this.getNotesSubscription.unsubscribe();
    // TODO solve problem of a user that might not press the save button, so then unsubscribing will cause issues
    //this.saveNoteSubscription.unsubscribe();
  }

  setInputFocus(isFocus: boolean) {
    this.inputFocusClass = isFocus;
  }

  private onDropModel(args: any) {
    let [el, target, source] = args;
    let order = [];
    this.notes.forEach(note => {
      order.push(note.id);
    });
    localStorage.setItem("order", JSON.stringify(order));
  }

  refreshNotesTables() { // refreshes the notes when the user updates or changes some of his/her notes
    let testNotes = this.notes;
    if (localStorage.getItem('order')) {
      this.order = JSON.parse(localStorage.getItem("order"));
    }
    this.notes = [];
    // sort the notes in the correct order
    this.order.forEach(el => {
      testNotes.forEach(note => {
        if (String(note.id) === String(el.id)) {
          this.notes.push(note);
        }
      });
    });
    if (_.isEmpty(this.notes)) {
      this.emptyHtmlMsg = true;
    } else {
      this.emptyHtmlMsg = false;
    }
    this.spinner = false;
  }

  resetNoteTextArea(notetextarea: any) {
    notetextarea.placeholder = "Write a note";
    notetextarea.style.height = "auto";
    notetextarea.style.height = "48px";
  }

  resetDraft() {
    this.draft = {
      id: '',
      createdDateTime: '',
      title: '',
      contentUrl: '',
      lastModifiedDateTime: '',
      parentSection: {
        id: '',
        displayName: ''
      }
    }
  }

  createTemplate() {
    this.template = `
          <html>
            <head>
              <title>${this.draft.title}</title>
              <meta name="created" content="${new Date().toISOString()}" />
            </head>
            <body>
              <p>${this.draft.contentUrl}</p>
            </body>
          </html>
        `
  }

  saveNote(e: Event, notetextarea: any) {
    if (_.trim(this.draft.title) || _.trim(this.draft.contentUrl)) {
      this.createTemplate();
      this.draft.createdDateTime = new Date().toISOString();
      this.draft.parentSection.id = "1-c1bfa9c8-29f3-4ec1-b151-677f2e566351";
      this.draft.parentSection.displayName = "Design principles";
      this.saveNoteSubscription = this.notesService.saveNote(this.draft, this.template)
        .subscribe(res => {
          this.resetNoteTextArea(notetextarea);
          //this.updateOrder(this.draft);
          this.setInputFocus(false);
          this.resetDraft();
          this.getNotes();
        }, err => {
          this.resetDraft();
          this.resetNoteTextArea(notetextarea);
        }, () => {
          this.refreshNotesTables();
        });
    } else {
      this.resetNoteTextArea(notetextarea);
      notetextarea.value = null;
      this.setInputFocus(false);
    }
  }

  // setNoteColor(color, note) {
  //   if (note.doc.color != color) {
  //     note.doc.color = color;
  //     this._notesService.updateNote('notes', note.doc)
  //       .then(res => {
  //         this.refreshNotesTables();
  //       });
  //   }
  // }

  // setRemindMeNote(note) {
  //   this.remindMe.noteToSet = note;
  // }

  // setReminderClick() {
  //   if (this.remindMe.date) {
  //     this.remindMe.noteToSet.doc.reminder = {
  //       date: this.remindMe.date.toString(),
  //       repeat: this.remindMe.repeat
  //     };
  //     this._notesService.updateNote('notes', this.remindMe.noteToSet.doc)
  //       .then(res => {
  //         this.remindMe.date = null;
  //         this.remindMe.repeat = 'doesnotrepeat';
  //         this.remindMe.noteToSet = null;
  //         this._notesService.updateReminderTable('notes');
  //         this.refreshNotesTables();
  //         this._notificationsService.alert("Done", "Reminder set");
  //       }, err => {
  //         this.editNoteDraft = {};
  //       });
  //   }
  // }

  editModalNoteClick(note) {
    this.toEditNote = note;
    this.editNoteDraft.title = note.title;
    this.editNoteDraft.note = note.note;
  }

  updateOrder(draft) {
    let newOrder: any = [];
    if (localStorage.getItem('order')) {
      newOrder = JSON.parse(localStorage.getItem('order'));
      newOrder.unshift(draft);
    } else {
      newOrder.push(draft);
    }
    localStorage.setItem("order", JSON.stringify(newOrder));
  }

  deleteFromOrder(note) {
    let index = this.order.indexOf(this.order.filter(row => {
      return String(row) === String(note.doc._id);
    })[0]);
    if (index !== -1) {
      this.order.splice(index, 1);
      localStorage.setItem("order", JSON.stringify(this.order));
    }
  }
}
