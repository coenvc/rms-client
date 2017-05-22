import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Status } from "../classes/Status";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { host, folder } from '../classes/global'

@Injectable()
export class StatusDataService {

  //localhost prospect url
  private statusUrl = host + folder;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {
  }

  getAll(): Observable<Status[]> {
    return Observable.from(this.http.get(this.statusUrl + 'status/all').map((res: Response) => res.json()));
  }

  getStatusById(id: number): Observable<Status> {

    return this.http.get(this.statusUrl + 'status/' + id).map((res: Response) => res.json())

  }

  postStatus(Status: Status) {
    return this.http.post(this.statusUrl + "status/", Status);
  }

  delete(id: number) {
    return this.http.delete(this.statusUrl + "status/" + id, this.headers)
  }

  updateStatus(status: Status) {
    return this.http.put(this.statusUrl + "status/", status, this.headers);
  }
}
