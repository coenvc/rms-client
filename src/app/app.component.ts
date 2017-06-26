import {Component} from "@angular/core";
import {ProspectDataService} from "../app/prospect-data.service";
import {StatusDataService} from "../app/status-data.service";
import { TranslateService } from 'ng2-translate';
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

  constructor(private translate: TranslateService) {
    translate.addLangs(['nl', 'en', 'ti']);
    translate.setDefaultLang('nl');
    translate.use('nl');
  }
}
