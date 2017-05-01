import { ActionType } from "classes/ActionType";
import { Prospect } from "classes/Prospect";

export class Action { 
    public actionType: ActionType;  
    public completed: boolean; 
    public date: Date; 
    public description:string; 
    public id: number; 
    public incomplete:boolean; 
    public Prospect:Prospect; 

    constructor(actionType?:ActionType,complete?:boolean,date?:Date,id?:number,incomplete?:boolean,Prospect?:Prospect){ 
        this.actionType = actionType; 
        this.completed = complete; 
        this.date = date; 
        this.id = id; 
        this.incomplete = incomplete; 
        this.Prospect = Prospect; 
        
    }

}