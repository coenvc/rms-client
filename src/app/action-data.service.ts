import { Injectable } from '@angular/core';
import {Headers, Http, Response,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { folder, host } from "classes/global";
import { Action } from "classes/Action";
import { ActionType } from "classes/ActionType";
import {ActionOverview} from "classes/ActionOverview"
@Injectable()
export class ActionDataService {
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
      return Action;
}


  register(action: Action) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("http://84.24.62.136:8080/api/action/insert",action,headers);
  }

  getProspectActionsUnsorted(id:number){
    return Observable.from(this.http.get("http://84.24.62.136:8080/api/action/all/unsorted/prospect/"+id).map((res: Response)=> res.json()));
  }

  updateAction(action:Action){
    return this.http.put("http://84.24.62.136:8080/api/action/update",action)
                  .map((res:Response) => res.json())
                  .catch((error:any)=>Observable.throw(error.json().error || 'Server Error'))
  }

  getUserActionOverview(id:number):Observable<ActionOverview>{
    return this.http.get("http://84.24.62.136:8080/api/action/all/user/"+id)
                    .map((res:Response)=>res.json())

  }

  getAllActionsOverview():Observable<ActionOverview>{
    return this.http.get("http://84.24.62.136:8080/api/action/all/")
                    .map((res:Response)=>res.json())
  }

}
