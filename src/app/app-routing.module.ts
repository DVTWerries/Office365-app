import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalenderEventsComponent } from './calender-events/calender-events.component';
import { CardComponent } from './card/card.component';
import { NotesComponent } from './notes/notes.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: DashboardComponent },
  { path: 'calender/events', component: CalenderEventsComponent },
  { path: 'personal/contacts', component: CardComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'task/kaban/board', component: KanbanBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
