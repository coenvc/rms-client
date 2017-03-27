import { Injectable } from '@angular/core';
import { User } from '../classes/user'
import { host, folder } from '../classes/global'

import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class LoginService {

  private apiUrl: String = host + folder;
  private user: User;

  constructor(private http: Http) { }

  login(providedUsername, providedPassword) {
    return this.http.post(this.apiUrl + 'user/login', { username: providedUsername, password: providedPassword })
      .map(res => res.json())
      .catch(e => {
        alert("Wachtwoord en/of gebruikersnaam fout.")
        return null
      })
  }
}
