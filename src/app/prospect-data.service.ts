import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import {Observable} from 'rxjs/Rx'; 
import {Test} from '../classes/TestProspect'
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()


export class ProspectDataService {

  //localhost prospect url 
  private prospectUrl = 'http://localhost:8080/prospect/'; 
  constructor (private http: Http) {} 

  getProspectById(id:number): Observable<Test>{  
      return this.http.get(this.prospectUrl+id) 
      .map((res:Response)=>res.json())  
  
  }
}
