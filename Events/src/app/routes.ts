import { Routes } from '@angular/router'
import { Error404Component } from './errors/404.component';
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResovler, 
    CreateSessionComponent
} from './Events/index'

export const appRoutes : Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent, resolve: {events:EventListResovler} },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { path: 'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)},
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: '404', component: Error404Component},
]