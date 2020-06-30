import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component'
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';
import {
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResovler,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './Events/index'
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

 let toastr:Toastr = window['toastr']

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  	BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,
    CreateSessionComponent,
    SessionListComponent,
    Error404Component,
    CollapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService, 
    EventRouteActivator,
    ToastrService,
    EventListResovler,
    AuthService, 
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: 'canDeactivateCreateEvent', 
    useValue: checkDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if (component.isDearty){
    return window.confirm("If you have't saved this event, do you want to cancel it?")
  }
  return true
}
