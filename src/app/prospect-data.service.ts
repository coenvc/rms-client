import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'; 
import {Observable} from 'rxjs/Rx'; 
import {Test} from '../classes/TestProspect'
import {Prospect} from '../classes/Prospect'

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()


export class ProspectDataService {

  //localhost prospect url 
  private prospectUrl = 'http://84.24.62.136:8080/RMTSTEST/prospect/'; 
  constructor (private http: Http) {} 

  getProspectById(id:number): Observable<Test>{  
      return this.http.get(this.prospectUrl+id) 
      .map((res:Response)=>res.json())  
  
  } 

  getAll():Observable<Prospect[]>{ 
      const test = Observable.from(this.http.get(this.prospectUrl+'all').map((res:Response)=>res.json())) 
      test.groupBy(Prospect=> Prospect.Profession.name) 
      return test
      
  }
}
