import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {User} from "../classes/User";
// Import RxJs required methods
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { folder, host } from "classes/global";
import { HttpClientService } from "app/http-client.service";

@Injectable()
export class UserDataService {

  //localhost prospect url
  private Url = host + folder + 'user/';


  constructor(private http: HttpClientService) {
  }

  getAll(): Observable<User[]> {
    return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()));
  }

  getUserById(id: number): Observable<User> {
    return this.http.get(this.Url + id).map((res: Response) => res.json())
  }

  delete(id: number) {
    return this.http.delete(this.Url + id)
  }

  update(user: User) {
    return this.http.put(this.Url, user);
  }
}
