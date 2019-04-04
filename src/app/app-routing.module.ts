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
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: CalenderEventsComponent },
  { path: 'dashboard/profile', component: DashboardComponent },
  { path: 'dashboard/personal/contacts', component: CardComponent },
  { path: 'dashboard/notes', component: NotesComponent },
  { path: 'dashboard/task/kaban/board', component: KanbanBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
