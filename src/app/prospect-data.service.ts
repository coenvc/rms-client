import {Injectable} from "@angular/core";
import {Http, Response,Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {Prospect} from "../classes/Prospect";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { host, folder } from '../classes/global'
import { HttpClientService } from "app/http-client.service";

@Injectable()
export class ProspectDataService {
    res: any;

  private Url = host + folder + 'prospect/';

  getAll():Observable<Prospect[]>{
      return Observable.from(this.http.get(this.Url+'all').map((res:Response)=>res.json()))
  }
  constructor(private http: HttpClientService) {
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
    return this.http.put(this.Url, prospect);
  }
}
