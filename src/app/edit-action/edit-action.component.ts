import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionDataService } from '../../../src/app/action-data.service';
import { ProspectDataService } from '../../../src/app/prospect-data.service';
import { UserDataService } from '../../../src/app/user-data.service';
import { ActiontypeDataService } from '../../../src/app/actiontype-data.service';
import { Prospect } from '../../classes/Prospect';
import { User } from '../../classes/user';
import { Action } from '../../classes/Action';
import { ActionType } from 'classes/ActionType';

@Component({
  selector: 'edit-action',
  templateUrl: './edit-action.component.html',
  styleUrls: ['./edit-action.component.css', '../../styles/buttons.css']
})
export class EditActionComponent implements OnInit {
  id: number;

  prospect: Prospect = new Prospect();
  action: Action = new Action();
  actiontype: ActionType = new ActionType();
  user: User = new User(null, null, null, null);

  userId: number;
  prospectId: number;
  actionId: number;

  users: User[] = new Array<User>();
  prospects: Prospect[] = new Array<Prospect>();
  actiontypes: ActionType[] = new Array<ActionType>();
  dateString = '06-07-2018';

  constructor(private actionDataService: ActionDataService,
    private prospectDataService: ProspectDataService,
    private userDataService: UserDataService,
    private actiontypeDataService: ActiontypeDataService,
    private route: ActivatedRoute) {
  }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.actionDataService.getActionById(+params['id'])
        .subscribe(request => {
          this.action = request;
          this.prospectId = this.action.prospect.id;
          this.userId = this.action.user.id;
          this.actionId = this.action.actionType.id;
          this.dateString = this.toLocaleDateString(new Date(request.date));
        });
    });

    this.prospectDataService.getAll().subscribe(request => this.prospects = request);
    this.userDataService.getAll().subscribe(request => this.users = request);
    this.actiontypeDataService.getAll().subscribe(request => this.actiontypes = request);
  }

  private toLocaleDateString(date: Date): string {

    return (date.getFullYear() + '-' + (date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth()) + '-' + date.getDate() + 'T' + date.toLocaleTimeString()).toString();
  }

  userChanged(userId) {
    this.userId = userId;
  }

  actionChanged(actionId) {
    this.actionId = actionId;
  }

  prospectChanged(prospectId) {
    this.prospectId = prospectId;
  }

  onSubmit(form, date) {
    this.action.actionType = this.actiontypes.find(a => a.id == this.actionId);
    this.action.user = this.users.find(u => u.id == this.userId);
    this.action.prospect = this.prospects.find(p => p.id == this.prospectId);
    this.action.date = new Date(date);

    this.actionDataService.updateAction(this.action)
      .subscribe(request => null,
      error => console.log(error));
  }
}
