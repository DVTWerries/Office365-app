import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalenderEventsComponent } from './calender-events/calender-events.component';
import { CardComponent } from './card/card.component';
import { NotesComponent } from './notes/notes.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { title: 'login'} },
  { path: 'dashboard', component: CalenderEventsComponent, data: { title: 'Home'}},
  { path: 'dashboard/profile', component: DashboardComponent, data: { title: 'Profile'} },
  { path: 'dashboard/personal/contacts', component: CardComponent, data: { title: 'Personal Contacts'} },
  { path: 'dashboard/notes', component: NotesComponent, data: { title: 'Notes'}},
  { path: 'dashboard/task/kaban/board', component: KanbanBoardComponent, data: { title: 'Tasks'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
