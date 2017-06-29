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

  prospect: Prospect = null;
  action: Action = new Action();
  actiontype: ActionType = new ActionType();
  user: User = null;

  users: User[] = new Array<User>();
  prospects: Prospect[] = new Array<Prospect>();
  actiontypes: ActionType[] = new Array<ActionType>();
  dateString = "06-07-2018";

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
          this.dateString = this.toLocaleDateString(this.action.date);
          this.prospect = this.action.prospect;
        });
    });

    this.prospectDataService.getAll().subscribe(request => this.prospects = request);
    this.userDataService.getAll().subscribe(request => this.users = request);
    this.actiontypeDataService.getAll().subscribe(request => this.actiontypes = request);
  }

  private toLocaleDateString(date: Date): string {

    return (date.getFullYear() + '-' + (date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth()) + '-' + date.getDate() + 'T' + date.toLocaleTimeString()).toString();
  }

  onSubmit(date) {
    console.log(this.prospect, this.actiontype, this.prospect)

    this.action.actionType = this.actiontype;
    this.action.user = this.user;
    this.action.prospect = this.prospect;

    this.actionDataService.updateAction(this.action)
      .subscribe(request => null,
      error => console.log(error));
  }
}
