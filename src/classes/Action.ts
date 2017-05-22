import { ActionType } from "classes/ActionType";
import { Prospect } from "classes/Prospect";
import { User } from "classes/user";

export class Action {
    public actionType: ActionType;
    public completed: boolean;
  public date: Date;
    public description:string;
    public location: string;
    public id: number;
    public incomplete:boolean;
    public prospect:Prospect;
    public user:User;

    constructor(actionType?:ActionType,complete?:boolean,date?:Date,id?:number,incomplete?:boolean,Prospect?:Prospect,User?:User){
        this.actionType = actionType;
        this.completed = complete;
        this.date = date;
        this.id = id;
        this.incomplete = incomplete;
        this.prospect = Prospect;
        this.user = User;
    }

}
