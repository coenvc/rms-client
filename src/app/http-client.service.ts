import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from "classes/user";

@Injectable()
export class HttpClientService {

  private apiKey = 'D4KIaFxISAl4SM16HBDyttE0k';
  private user: User;
  constructor(private http: Http) { }

  authorize(headers: Headers) {
    headers.append('API_KEY', this.apiKey);

    this.user = JSON.parse(localStorage.getItem('currentUser'));
    if (this.user != null) {
      console.log(this.user);
      headers.append('Authorization', 'Basic ' + this.user.test);
    }
    headers.append('Content-Type', 'application/json');
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
