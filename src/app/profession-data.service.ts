import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Profession } from "../classes/Profession";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { host, folder } from '../classes/global'

@Injectable()
export class ProfessionDataService {

  private Url = host + folder + 'profession/'
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {

  }

  getAll(): Observable<Profession[]> {
    return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()));
  }

  getById(id: number): Observable<Profession> {
    return Observable.from(this.http.get(this.Url + id).map((res: Response) => res.json()));
  }

  register(profession: Profession) {
    return this.http.post(this.Url + 'register', profession);
  }

  update(profession: Profession) {
    return this.http.put(this.Url + 'update', profession, this.headers);
  }
}
