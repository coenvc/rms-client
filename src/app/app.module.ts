import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MemberCardComponent} from './member-card/member-card.component';
import {SearchPipePipe} from '../pipes/search-pipe.pipe';
import {FilterPipe} from '../pipes/filter.pipe';
import {PotentialFormComponent} from './potential-form/potential-form.component';
import {LoginFormComponent} from './login-form/login-form.component'
import {LoginService} from './login.service'
import {HeaderComponent} from './header/header.component'
import {EditMemberComponent} from './edit-member/edit-member.component'
import { routing } from "app/app.routes";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProspectDetailsComponent } from './prospect-details/prospect-details.component';
import { SettingsComponent } from './settings/settings.component';
import { ModalComponent } from './modal/modal.component';
import { AddAppointmentModalComponent } from './add-appointment-modal/add-appointment-modal.component';
import { ActionService } from "app/action-service.service";
import { ProspectDataService } from "app/prospect-data.service";
<<<<<<< HEAD
import { CompleteActionModalComponent } from './complete-action-modal/complete-action-modal.component';

=======
import { ActiontypeDataService } from "app/actiontype-data.service";
import {ProfessionDataService} from "app/profession-data.service";
>>>>>>> f23ab88151e11a6d496e2416615e36aff9626421

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
    ModalComponent,
    AddAppointmentModalComponent,
    CompleteActionModalComponent
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
    ActionService,
    ProspectDataService,
    ProfessionDataService,
    ActiontypeDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
