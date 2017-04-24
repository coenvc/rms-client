import {Component} from "@angular/core";
import {ProspectDataService} from "../app/prospect-data.service";
import {StatusDataService} from "../app/status-data.service";
@Component({
  selector: 'app-root',
  providers: [ProspectDataService, StatusDataService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  ProspectDataService: ProspectDataService;
  StatusDataService: StatusDataService;
  title = 'app works!';
}
