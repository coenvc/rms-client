import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Status} from "../classes/Status";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class StatusDataService {

  //localhost prospect url
  private statusUrl = 'http://84.24.62.136:8080/api/status/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }
  
  getAll(): Observable<Status[]> {
    return Observable.from(this.http.get(this.statusUrl + 'all').map((res: Response) => res.json()));
  }

  getStatusById(id: number): Observable<Status> {
    
    return this.http.get(this.statusUrl + id).map((res: Response) => res.json())  

  } 

  postStatus(Status:Status){ 
      return this.http.post("http://84.24.62.136:8080/api/status",Status); 
  } 

  delete(id:number){ 
    return this.http.delete(this.statusUrl+id,this.headers)
  }  

  updateStatus(status:Status){ 
    return this.http.put("http://84.24.62.136:8080/api/status", status, this.headers);
  }
}
