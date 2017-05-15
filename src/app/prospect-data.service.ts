import {Injectable} from "@angular/core";
import {Http, Response,Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Prospect} from "../classes/Prospect";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ProspectDataService {
    res: any;

  //localhost prospect url
  private Url = 'http://84.24.62.136:8080/api/prospect/';
  private headers = new Headers({'Content-Type': 'application/json'});

  getAll():Observable<Prospect[]>{
      const prospects = Observable.from(this.http.get(this.Url+'all').map((res:Response)=>res.json()))
      return prospects
  }
  constructor(private http: Http) {
  }

  getProspectById(id: number): Observable<Prospect> {
    return this.http
           .get(this.Url+id)
           .map(request =>{
                return request.json()
           });
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  register(prospect: Prospect) {
    alert("Nieuw lid succesvol toegevoegd!");
    return this.http.post(this.Url, prospect);
  }

  update(prospect: Prospect){
    return this.http.put(this.Url, prospect, this.headers);
  }
}
