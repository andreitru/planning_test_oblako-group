import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ToScheduleComponent} from './header/to-schedule/to-schedule.component';
import {BurgerComponent} from "./header/burger/burger.component";
import {BreadCrumbsComponent} from './bread-crumbs/bread-crumbs.component';
import {TabsComponent} from "./tabs/tabs.component";
import {TabComponent} from "./tabs/tab/tab.component";
import {GroupPlanningComponent} from './group-planning/group-planning.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from './group-planning/form/form.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {CounterComponent} from './counter/counter.component';
import {CustomizeFilterComponent} from './customize-filter/customize-filter.component';
import {ResetComponent} from './reset/reset.component';
import {SessionsListComponent} from './sessions-list/sessions-list.component';
import {ModalComponent} from './modal/modal.component';
import {ProgramComponent} from './modal/program/program.component';
import {EventComponent} from './modal/event/event.component';
import {EventNameComponent} from './modal/event/event-name/event-name.component';
import {DpDatePickerModule} from "ng2-date-picker";
import {EventFormComponent} from './modal/event/event-form/event-form.component';
import {ConditionsComponent} from './modal/conditions/conditions.component';
import {ParticipantsContainerComponent} from './modal/participants-container/participants-container.component';
import {AvailableMembersComponent} from './modal/available-members/available-members.component';
import { EventParticipantsComponent } from './modal/event-participants/event-participants.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BurgerComponent,
    ToScheduleComponent,
    BreadCrumbsComponent,
    TabsComponent,
    TabComponent,
    GroupPlanningComponent,
    FormComponent,
    CounterComponent,
    CustomizeFilterComponent,
    ResetComponent,
    SessionsListComponent,
    ModalComponent,
    ProgramComponent,
    EventComponent,
    EventNameComponent,
    EventFormComponent,
    ConditionsComponent,
    ParticipantsContainerComponent,
    AvailableMembersComponent,
    EventParticipantsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    DpDatePickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
