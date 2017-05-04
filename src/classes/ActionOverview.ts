import { Action } from "classes/Action";

export class ActionOverview { 
    today: Action[];  
    thisWeek:Action[]; 
    thisMonth:Action[]; 

    constructor(today:Action[],thisWeek:Action[],thisMonth:Action[]){ 
        this.today = today; 
        this.thisWeek = thisWeek; 
        this.thisMonth = thisMonth; 
    }
    
}