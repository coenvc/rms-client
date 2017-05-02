import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Status} from "../classes/Status";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class StatusDataService {

  //localhost prospect url
  private statusUrl = 'http://84.24.62.136:8080/api/status/';

  constructor(private http: Http) {
  }

  getAll(): Observable<Status[]> {
    return Observable.from(this.http.get(this.statusUrl + 'all').map((res: Response) => res.json()));
  }

  getStatusById(id: number): Observable<Status> {
    return this.http.get(this.statusUrl + id).map((res: Response) => res.json())
  } 


}
