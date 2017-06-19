import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { ActionType } from "../classes/ActionType";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { host, folder } from '../classes/global'
import { HttpClientService } from "app/http-client.service";

@Injectable()
export class ActiontypeDataService {
  //localhost prospect url
  private Url = host + folder + 'actionType/';

  constructor(private http: HttpClientService) {
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

  delete(id: number) {
    return this.http.delete(this.Url + id);
  }

  update(actionType: ActionType): Observable<any> {
    console.log(actionType.id)
    return this.http.put(this.Url, actionType);
  }
}
