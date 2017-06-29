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

  action: Action = new Action();
  user: User = new User(0, '', '', true);
  prospect: Prospect = new Prospect();
  actiontype: ActionType = new ActionType();

  users: User[] = new Array<User>();
  prospects: Prospect[] = new Array<Prospect>();
  actiontypes: ActionType[] = new Array<ActionType>();

  dateString: String = '2017-06-01T08:30:00';

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
        });
    });

    this.prospectDataService.getAll().subscribe(request => {this.prospects = request; console.log(this.prospects)});
    this.userDataService.getAll().subscribe(request => this.users = request);
    this.actiontypeDataService.getAll().subscribe(request => this.actiontypes = request);
  }


  private toLocaleDateString(date: Date): string {

    return (date.getFullYear() + '-' + (date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth()) + '-' + date.getDate() + 'T' + date.toLocaleTimeString()).toString();
  }

  onSubmit(date) {
    this.actionDataService.updateAction(this.action)
      .subscribe(request => null,
      error => console.log(error));
  }
}
