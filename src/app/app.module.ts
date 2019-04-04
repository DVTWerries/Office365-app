import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {TranslateModule} from '@ngx-translate/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule, MatGridListModule } from '@angular/material';

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
import { TokenInterceptor } from './intercepter/token-interceptor';

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
    MatIconModule,
    MatGridListModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
