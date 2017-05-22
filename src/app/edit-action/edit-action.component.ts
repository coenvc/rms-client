import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ActionDataService} from "../../../src/app/action-data.service";
import {ProspectDataService} from "../../../src/app/prospect-data.service";
import {UserDataService} from "../../../src/app/user-data.service";
import {Prospect} from "../../classes/Prospect";
import {User} from "../../classes/user";
import {Action} from "../../classes/Action";

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

  users: User[] = new Array<User>();
  prospects: Prospect[] = new Array<Prospect>();

  constructor(private actionDataService: ActionDataService,
              private prospectDataService: ProspectDataService,
              private userDataService: UserDataService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.getObject(+params['id']));
    this.prospectDataService.getAll().subscribe(request => this.prospects = request,
      error => console.log(error));
    this.userDataService.getAll().subscribe(request => this.users = request,
      error => console.log(error));
  }

  private getObject(id: number) {
    this.actionDataService.getActionById(id)
      .subscribe(request => this.splitObject(request),
        error => console.log(error));
  }

  private splitObject(action: Action) {
    this.action = action;
    this.user = action.user;
    this.prospect = action.prospect;

    console.log(this.action)
  }

  onSubmit() {
    // Merge the objects back to Prospect
    this.action.user = this.user;
    this.action.prospect = this.prospect;

    console.log(this.action);
    console.log(JSON.stringify(this.action));

     // this.actionDataService.updateAction(this.action)
     //   .subscribe(request => console.log(request),
     //     error => console.log(error));
  }
}
