import { Component, OnInit } from '@angular/core';
import { ActionDataService } from '../action-data.service';
import { ActionOverview } from 'classes/ActionOverview';
import { User } from 'classes/user';
import { Action } from 'classes/Action';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../styles/buttons.css'],
  providers: [ActionDataService]
})
export class DashboardComponent implements OnInit {
  ActionOverview: ActionOverview;
  Actions: Action[];
  CurrentUser: User;
  completeAppointmentModalVisible: boolean;
  prospectId: number;
  reloadMethod: string;

  constructor(public ActionService: ActionDataService) { }

  ngOnInit() {
    this.ActionService.getAll().subscribe(r => {
      this.CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.reloadMethod = 'user';
      this.reloadActions(this.reloadMethod);
    });
    // var audio = new Audio();
    // audio.src = "http://84.24.199.0/RMTS/audio/snackbar.mp3";
    // audio.load();
    // audio.play();
  }

  showMyActions(event) {
    this.reloadMethod = 'user';
    this.reloadActions(this.reloadMethod)
    const myButton = document.getElementById('allAppointmentsTab');
    myButton.className += ' selected';
    const otherButton = document.getElementById('myAppointmentsTab');
    otherButton.className = 'tabs';
  }

  showAllActions(event) {
    this.reloadMethod = 'all';
    this.reloadActions(this.reloadMethod)
    const myButton = document.getElementById('myAppointmentsTab');
    myButton.className += ' selected';
    const otherButton = document.getElementById('allAppointmentsTab');
    otherButton.className = 'tabs';
  }

  completeAction(event, prospectId, action: Action) {
    if (action.completed) {
      return;
    }

    localStorage.setItem('currentAction', JSON.stringify(action));
    this.prospectId = prospectId;
    this.completeAppointmentModalVisible = true;
  }

  hideCompleteActionModal() {
    this.completeAppointmentModalVisible = false;
    this.reloadActions(this.reloadMethod)
  }

  private reloadActions(method: string) {
    switch (method) {
      case 'user':
        this.ActionService.getUserActionOverview(this.CurrentUser.id).subscribe(request => {
          this.ActionOverview = new ActionOverview(request.today, request.thisWeek, request.thisMonth, request.remainder)
        });
        break;
      case 'all':
        this.ActionService.getAllActionsOverview().subscribe(request => {          
          this.ActionOverview = new ActionOverview(request.today, request.thisWeek, request.thisMonth, request.remainder)
        });
        break;
    }
  }
}
