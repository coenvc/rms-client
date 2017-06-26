import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ActionDataService } from "../../../src/app/action-data.service";
import { ProspectDataService } from "../../../src/app/prospect-data.service";
import { UserDataService } from "../../../src/app/user-data.service";
import { ActiontypeDataService } from "../../../src/app/actiontype-data.service";
import { Prospect } from "../../classes/Prospect";
import { User } from "../../classes/user";
import { Action } from "../../classes/Action";
import { ActionType } from "classes/ActionType";

@Component({
  selector: 'edit-action',
  templateUrl: './edit-action.component.html',
  styleUrls: ['./edit-action.component.css', '../../styles/buttons.css']
})
export class EditActionComponent implements OnInit {
  id: number;

  action: Action = new Action();
  user: User = new User(0, "", "", true);
  prospect: Prospect = new Prospect();
  actiontype: ActionType = new ActionType();

  users: User[] = new Array<User>();
  prospects: Prospect[] = new Array<Prospect>();
  actiontypes: ActionType[] = new Array<ActionType>();

  dateString: String = "2017-06-01T08:30:00";

  constructor(private actionDataService: ActionDataService,
    private prospectDataService: ProspectDataService,
    private userDataService: UserDataService,
    private actiontypeDataService: ActiontypeDataService,
    private route: ActivatedRoute) {
  }

  async ngOnInit() {
    await this.route.params.subscribe(params => this.getObject(+params['id']));
    await this.prospectDataService.getAll().subscribe(request => this.prospects = request,
      error => console.log(error));
    await this.userDataService.getAll().subscribe(request => this.users = request,
      error => console.log(error));
    await this.actiontypeDataService.getAll().subscribe(request => this.actiontypes = request,
      error => console.log(error));
  }

  private getObject(id: number) {
    this.actionDataService.getActionById(id)
      .subscribe(request => {
        this.splitObject(request);
        this.dateString = this.toLocaleDateString(request.date);
      },
      error => console.log(error));
  }

  private toLocaleDateString(date: Date): string {

    return (date.getFullYear() + '-' + (date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth()) + '-' + date.getDate() + 'T' + date.toLocaleTimeString()).toString();
  }

  private splitObject(action: Action) {
    this.action = action;
    this.action.date = new Date(action.date);
    this.user = action.user;
    this.prospect = action.prospect;
    this.actiontype = action.actionType;
  }

  onSubmit(date) {
    // Merge the objects back to Prospect
    this.action.user = this.user;
    this.action.prospect = this.prospect;
    console.log(this.actiontype);
    
    this.action.actionType = this.actiontype;
    this.action.date = new Date(date);

    this.actionDataService.updateAction(this.action)
      .subscribe(request => console.log(request),
      error => console.log(error));
  }
}
