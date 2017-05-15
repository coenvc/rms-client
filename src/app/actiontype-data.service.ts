import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {ActionType} from "../classes/ActionType";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ActiontypeDataService {
  //localhost prospect url
  private Url = 'http://84.24.62.136:8080/api/actionType/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getAll(): Observable<ActionType[]> {
    return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()));
  }

  getById(id: number): Observable<any> {
    return Observable.from(this.http.get(this.Url + id).map((res: Response) => res.json()));
  }


  register(actionType: ActionType) {
    return this.http.post(this.Url + '', actionType);
  } 

 delete(id:number){ 
    return this.http.delete(this.Url+id,this.headers);
 }

  update(actionType: ActionType):Observable<any> { 
    console.log(actionType.id)
    return this.http.put(this.Url, actionType, this.headers);
  }
}
