import { Component, OnInit } from '@angular/core';
import { ActionDataService } from "../action-data.service";
import { ActionOverview } from "classes/ActionOverview";
import { User } from "classes/user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../styles/buttons.css'],
  providers: [ActionDataService]
})
export class DashboardComponent implements OnInit {
  ActionOverview: ActionOverview;
  CurrentUser: User;

  constructor(public ActionService: ActionDataService) {
    this.CurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getUser();
  }

  showMyActions(event) {
    this.getUser();
    var myButton = document.getElementById("allAppointmentsTab");
    myButton.className += " selected"
    var otherButton = document.getElementById("myAppointmentsTab");
    otherButton.className = "tabs";
  }

  showAllActions(event) {
    this.getAll();
    var myButton = document.getElementById("myAppointmentsTab");
    myButton.className += " selected"
    var otherButton = document.getElementById("allAppointmentsTab");
    otherButton.className = "tabs";
  }

  ngOnInit() {
  }

  getUser() {
    this.ActionService.getUserActionOverview(this.CurrentUser.id)
      .subscribe(request => {
        this.ActionOverview = new ActionOverview(request.today, request.thisWeek, request.thisMonth, request.remainder)
        console.log(this.ActionOverview)
      })
  }

  getAll() {
    this.ActionService.getAllActionsOverview()
      .subscribe(request => {
        this.ActionOverview = new ActionOverview(request.today, request.thisWeek, request.thisMonth, request.remainder)
      })
  }

}
