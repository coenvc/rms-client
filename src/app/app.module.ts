import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MemberCardComponent} from './member-card/member-card.component';
import {SearchPipePipe} from '../pipes/search-pipe.pipe';
import {FilterPipe} from '../pipes/filter.pipe';
import {PotentialFormComponent} from './potential-form/potential-form.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {LoginService} from './login.service';
import {HeaderComponent} from './header/header.component';
import {EditMemberComponent} from './edit-member/edit-member.component';
import {EditActionComponent} from './edit-action/edit-action.component';
import {routing} from 'app/app.routes';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProspectDetailsComponent} from './prospect-details/prospect-details.component';
import {SettingsComponent} from './settings/settings.component';
import {ModalComponent} from './modal/modal.component';
import {AddAppointmentModalComponent} from './add-appointment-modal/add-appointment-modal.component';
import {ActionDataService} from './action-data.service';
import {ProspectDataService} from './prospect-data.service';
import {CompleteActionModalComponent} from './complete-action-modal/complete-action-modal.component';
import {ProfessionDataService} from 'app/profession-data.service';
import {ActiontypeDataService} from 'app/actiontype-data.service';
import {UserDataService} from 'app/user-data.service';
import {SettingsFilterPipePipe} from './settings-filter-pipe.pipe';
import {AddStatusModalComponent} from './add-status-modal/add-status-modal.component';
import {AddActionModalComponent} from './add-action-modal/add-action-modal.component';
import {EditActionModalComponent} from './edit-action-modal/edit-action-modal.component';
import {EditStatusModalComponent} from './edit-status-modal/edit-status-modal.component';
import {AddUserModalComponent} from './add-user-modal/add-user-modal.component';
import {EditUserModalComponent} from './edit-user-modal/edit-user-modal.component';
import {SettingsMemberFilterPipe} from './settings-member-filter.pipe';
import {HttpClientService} from 'app/http-client.service';


@NgModule({
  declarations: [
    AppComponent,
    MemberCardComponent,
    SearchPipePipe,
    FilterPipe,
    PotentialFormComponent,
    LoginFormComponent,
    HeaderComponent,
    DashboardComponent,
    ProspectDetailsComponent,
    SettingsComponent,
    EditMemberComponent,
    EditActionComponent,
    ModalComponent,
    AddAppointmentModalComponent,
    CompleteActionModalComponent,
    SettingsFilterPipePipe,
    AddStatusModalComponent,
    AddActionModalComponent,
    EditActionModalComponent,
    EditStatusModalComponent,
    AddUserModalComponent,
    EditUserModalComponent,
    SettingsMemberFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService,
    ActionDataService,
    ProspectDataService,
    ProfessionDataService,
    UserDataService,
    ActiontypeDataService,
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
