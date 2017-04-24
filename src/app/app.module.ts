import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {MemberCardComponent} from "./member-card/member-card.component";
import {SearchPipePipe} from "../pipes/search-pipe.pipe";
import {FilterPipe} from "../pipes/filter.pipe";
import {PotentialFormComponent} from "./potential-form/potential-form.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {LoginService} from "./login.service";
import {HeaderComponent} from "./header/header.component";
import {EditMemberComponent} from "./edit-member/edit-member.component";
import {routing} from "app/app.routes";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProspectDetailsComponent} from "./prospect-details/prospect-details.component";
import {SettingsComponent} from "./settings/settings.component";

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
    EditMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
