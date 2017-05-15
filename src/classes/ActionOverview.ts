import { Action } from "classes/Action";

export class ActionOverview { 
    today: Action[];  
    thisWeek:Action[]; 
    thisMonth:Action[];
    remainder:Action[];
    all:any[];

    constructor(today:Action[],thisWeek:Action[],thisMonth:Action[], remainder:Action[]){ 
        this.today = today; 
        this.thisWeek = thisWeek; 
        this.thisMonth = thisMonth;
        this.all = [
            {"name": "Vandaag", list: today},
            {"name": "Deze week", list: thisWeek},
            {"name": "Deze maand", list: thisMonth},
            {"name": "Overig", list: remainder},
        ] 
    }
    
}