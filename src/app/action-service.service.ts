import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Action } from "classes/Action";
import { host, folder } from "classes/global";
import { Prospect } from "classes/Prospect";
import {ActionType} from "classes/ActionType";
@Injectable()
export class ActionService {
  apiUrl = host + folder;
  constructor(private http:Http) { 

  } 

    getAll():Observable<Action[]>{
      const prospects = Observable.from(this.http.get(this.apiUrl+'/action/all').map((res:Response)=>res.json()))
      console.log(prospects);
      return prospects
  } 

  getByProspectId(id:number):Observable<Action[]>{ 
      const Actions = Observable.from(this.http.get("http://84.24.62.136:8080/api/action/all/prospect/"+id).map((res:Response)=>res.json()))
      console.log(Actions);
      return Actions
  }

  getByUserId(id:number):Observable<Action[]>{ 
      const Actions = Observable.from(this.http.get("http://84.24.62.136:8080/api/action/all/user/"+id).map((res:Response)=>res.json()))
      console.log(Actions);
      return Actions
  }  

  getActionById(id:number):Observable<Action>{ 
      const Action = Observable.from(this.http.get("http://84.24.62.136:8080/api/action/"+id).map((res:Response)=>res.json())) 
      console.log(Action); 
      return Action;
  }  

getActionTypes():Observable<ActionType[]>{ 
    const Action = Observable.from(this.http.get("http://84.24.62.136:8080/api/actionType/all").map((res:Response)=>res.json())) 
      console.log(Action); 
      return Action;
}

}
