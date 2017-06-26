import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from "classes/user";
import { Router } from "@angular/router";

@Injectable()
export class HttpClientService {

  private apiKey = 'D4KIaFxISAl4SM16HBDyttE0k';
  private user: User;
  constructor(private http: Http, private router: Router) { }

  authorize(headers: Headers) {
    headers.append('API_KEY', this.apiKey);
    headers.append('Content-Type', 'application/json');

    this.user = JSON.parse(localStorage.getItem('currentUser'));

    if (this.user != null) {
      headers.append('Authorization', 'Basic ' + btoa(this.user.username + ':' + this.user.password));
    } else {
      this.router.navigate(['']);
    }
  }

  get(url) {
    const headers = new Headers();
    this.authorize(headers);

    return this.http.get(url, { headers: headers });
  }

  post(url, body) {
    let headers = new Headers();
    this.authorize(headers);

    return this.http.post(url, body, { headers: headers });
  }

  put(url, body) {
    const headers = new Headers();
    this.authorize(headers);

    return this.http.put(url, body, { headers: headers })
  }

  delete(url) {
    const headers = new Headers();
    this.authorize(headers);

    return this.http.delete(url, { headers: headers });
  }
}
