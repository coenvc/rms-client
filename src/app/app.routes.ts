import { Routes, RouterModule } from "@angular/router";
import { MemberCardComponent } from "app/member-card/member-card.component";
import { PotentialFormComponent } from "app/potential-form/potential-form.component";
import { LoginFormComponent } from 'app/login-form/login-form.component';
import {DashboardComponent} from 'app/dashboard/dashboard.component' 
import { ProspectDetailsComponent } from 'app/prospect-details/prospect-details.component'
import { SettingsComponent } from "app/settings/settings.component";
const APP_ROUTES:Routes = [ 
    {path: 'prospect', component: ProspectDetailsComponent},
    {path: 'prospect/add', component: PotentialFormComponent},
    {path: '', component: LoginFormComponent}
]; 

export const routing = RouterModule.forRoot(APP_ROUTES);