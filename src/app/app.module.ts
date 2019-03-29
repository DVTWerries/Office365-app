import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { TaskComponent } from './task/task.component';
import { CalenderEventsComponent } from './calender-events/calender-events.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { NotesComponent } from './notes/notes.component';
import { CardComponent } from './card/card.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    KanbanBoardComponent,
    TaskComponent,
    CalenderEventsComponent,
    DatepickerComponent,
    NotesComponent,
    CardComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
