import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ActionDataService} from "../../../src/app/action-data.service";
import {ProspectDataService} from "../../../src/app/prospect-data.service";
import {UserDataService} from "../../../src/app/user-data.service";
import {ActiontypeDataService} from "../../../src/app/actiontype-data.service";
import {Prospect} from "../../classes/Prospect";
import {User} from "../../classes/user";
import {Action} from "../../classes/Action";
import {ActionType} from "classes/ActionType";

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

  constructor(private actionDataService: ActionDataService,
              private prospectDataService: ProspectDataService,
              private userDataService: UserDataService,
              private actiontypeDataService: ActiontypeDataService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getObject(+params['id']));

    this.prospectDataService.getAll().subscribe(request => this.prospects = request,
      error => console.log(error));
    this.userDataService.getAll().subscribe(request => this.users = request,
      error => console.log(error));
    this.actiontypeDataService.getAll().subscribe(request => this.actiontypes = request,
      error => console.log(error));
  }

  private getObject(id: number) {
    this.actionDataService.getActionById(id)
      .subscribe(request => this.splitObject(request),
        error => console.log(error));
  }

  private splitObject(action: Action) {
    this.action = action;
    this.action.date = new Date(action.date);
    this.user = action.user;
    this.prospect = action.prospect;
    this.actiontype = action.actionType;
  }

  onSubmit() {
    // Merge the objects back to Prospect
    this.action.user = this.user;
    this.action.prospect = this.prospect;
    this.action.actionType = this.actiontype;

    console.log(this.action);
    console.log(JSON.stringify(this.action));

    this.actionDataService.updateAction(this.action)
      .subscribe(request => console.log(request),
        error => console.log(error));
  }
}
