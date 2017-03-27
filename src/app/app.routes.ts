import { Routes, RouterModule } from "@angular/router";
import { MemberCardComponent } from "app/member-card/member-card.component";
import { PotentialFormComponent } from "app/potential-form/potential-form.component";

const APP_ROUTES:Routes = [ 
    {path:'',component:MemberCardComponent},
    {path:'add',component:PotentialFormComponent}
]; 

export const routing = RouterModule.forRoot(APP_ROUTES);