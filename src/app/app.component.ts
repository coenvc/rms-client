import { Component } from '@angular/core';
import {ProspectDataService} from '../app/prospect-data.service'
@Component({
  selector: 'app-root',
  providers: [ProspectDataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent { 
  ProspectDataService:ProspectDataService
  title = 'app works!';
}
