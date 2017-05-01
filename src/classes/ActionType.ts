export class ActionType{ 
    public id:number; 
    public content:string; 
    public incomplete:boolean; 

    constructor(id?:number,content?:string,incomplete?:boolean) {
        this.content = content; 
        this.id = id; 
        this.incomplete = incomplete; 
    }
}