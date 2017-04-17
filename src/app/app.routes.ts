import { Routes, RouterModule } from "@angular/router";
import { MemberCardComponent } from "app/member-card/member-card.component";
import { PotentialFormComponent } from "app/potential-form/potential-form.component";
import { LoginFormComponent } from 'app/login-form/login-form.component';

const APP_ROUTES:Routes = [ 
    {path: 'prospect', component: MemberCardComponent},
    {path: 'prospect/add', component: PotentialFormComponent},
    {path: '', component: LoginFormComponent}
]; 

export const routing = RouterModule.forRoot(APP_ROUTES);