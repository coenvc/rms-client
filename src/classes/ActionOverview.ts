import { Action } from "classes/Action";

export class ActionOverview { 
    today: Action[];  
    thisWeek:Action[]; 
    thisMonth:Action[];
    remainder:Action[];
    all:any[];
    isLoaded = false;

    constructor(today:Action[],thisWeek:Action[],thisMonth:Action[], remainder:Action[]){ 
        this.today = today; 
        this.thisWeek = thisWeek; 
        this.thisMonth = thisMonth;
        this.remainder = remainder;

        this.all = [
            {"name": "Vandaag", list: today},
            {"name": "Deze week", list: thisWeek},
            {"name": "Deze maand", list: thisMonth},
            {"name": "Overig", list: remainder},
        ] 
        
        this.isLoaded = true;
    }

    public isEmpty(): boolean{
        if (!this.isLoaded) {
            return false;
        }

        return (this.today.length === 0
        && this.thisWeek.length === 0
        && this.thisMonth.length === 0
        && this.remainder.length === 0);
    }
}