import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {User} from '../classes/User';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserDataService {å

  // localhost prospect url
  private Url = 'http://84.24.62.136:8080/api/user/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getAll(): Observable<User[]> {
    return Observable.from(this.http.get(this.Url + 'all').map((res: Response) => res.json()));
  }

  getUserById(id: number): Observable<User> {
    return this.http.get(this.Url + id).map((res: Response) => res.json());
  }
  delete(id: number) {
    return this.http.delete(this.Url + id, this.headers);
  }

  register(user: User){
    return this.http.post(this.Url, user, this.headers);
  }

  update(user: User) {
    return this.http.put(this.Url, user);
  }
}
