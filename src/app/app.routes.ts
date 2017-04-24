import {Routes, RouterModule} from "@angular/router";
import {MemberCardComponent} from "app/member-card/member-card.component";
import {PotentialFormComponent} from "app/potential-form/potential-form.component";
import {LoginFormComponent} from 'app/login-form/login-form.component';
import { EditMemberComponent } from 'app/edit-member/edit-member.component';
import { ProspectDetailsComponent } from "app/prospect-details/prospect-details.component";
import { SettingsComponent } from "app/settings/settings.component";

const APP_ROUTES: Routes = [
  {path: '', component: ProspectDetailsComponent},
  {path: 'prospect', component: MemberCardComponent},
  {path: 'prospect/add', component: PotentialFormComponent},
  {path: 'prospect/edit/:id', component: EditMemberComponent}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
