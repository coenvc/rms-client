import {Component, OnInit} from "@angular/core";
import {StatusDataService} from "../../../src/app/status-data.service";
import {ProfessionDataService} from "../../../src/app/profession-data.service";
import {ActiontypeDataService} from "../../../src/app/actiontype-data.service";

import {Status} from "../../classes/Status";
import {Profession} from "../../classes/Profession";
import {ActionType} from "../../classes/ActionType";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  statuses: Status[];
  professions: Profession[];
  actiontypes: ActionType[];

  statusesCount: string = "0";
  professionsCount: string = "0";
  actiontypesCount: string = "0";

  statusesSearch: string = "";
  professionsSearch: string = "";
  actiontypesSearch: string = "";

  Status:Status = new Status(); 
  Profession:Profession = new Profession(); 
  ActionType:ActionType = new ActionType();
  

  constructor(private statusDataService: StatusDataService,
              private professionDataService: ProfessionDataService,
              private actiontypedataService: ActiontypeDataService) {
  }

  ngOnInit() {
    this.statusDataService.getAll().subscribe(request => this.mapAndCountStatus(request));
    this.professionDataService.getAll().subscribe(request => this.mapAndCountProfession(request));
    this.actiontypedataService.getAll().subscribe(request => this.mapAndCountActiontype(request));
  }

  mapAndCountStatus(request: Status[]) {
    this.statuses = request;
    this.statusesCount = this.statuses.length.toString();
  }

  mapAndCountProfession(request: Profession[]) {
    this.professions = request;
    this.professionsCount = this.professions.length.toString();
  }

  mapAndCountActiontype(request: ActionType[]) {
    this.actiontypes = request;
    this.actiontypesCount = this.actiontypes.length.toString();
  }  

  postStatus(){ 
    this.statusDataService.postStatus(this.Status) 
                          .subscribe(request => console.log(request))
  } 

  postActionType(){ 
    this.actiontypedataService.register(this.ActionType) 
                              .subscribe(request => console.log(request))
  }

  postProfession(){   
    console.log(this.Profession)
    this.professionDataService.register(this.Profession) 
         .subscribe(request => console.log(request)); 
    // this.statusDataService.post()
  }

}
