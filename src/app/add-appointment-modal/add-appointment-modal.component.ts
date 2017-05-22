import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Action } from "classes/Action";
import { User } from "classes/user";
import { Prospect } from "classes/Prospect";
import { ActionDataService } from "../action-data.service";
import { ActionType } from "classes/ActionType";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'appointment-modal',
  templateUrl: './add-appointment-modal.component.html',
  styleUrls: ['./add-appointment-modal.component.css', '../../styles/buttons.css', '../../styles/forms.css', '../../styles/modal.css'],
  providers: [ActionDataService]
})
export class AddAppointmentModalComponent implements OnInit {

  @Output() onButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  test: number;
  currentUser: User;
  currentProspect: Prospect;
  Appointment: Action = new Action;
  ActionTypes: ActionType[];

  constructor(public ActionService: ActionDataService, public router: Router) {
    this.Appointment.actionType = new ActionType();
    ActionService.getActionTypes().subscribe(request => this.ActionTypes = request);
  }

  submitForm() {
    this.getActionTypeById(this.test);
    this.Appointment.description = " ";
    this.Appointment.completed = false;
    this.Appointment.prospect = this.currentProspect;
    this.Appointment.user = this.currentUser;
    
    this.ActionService.register(this.Appointment)
      .subscribe((response) => {
        console.log("test")
        this.onButtonClicked.emit()
      },
      (error) => alert(error));
  }

  ngOnInit() {
    this.currentProspect = JSON.parse(localStorage.getItem('currentProspect'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  public getActionTypeById(id: number) {
    for (let action of this.ActionTypes) {
      if (action.id == id) {
        this.Appointment.actionType = action
      }
    }
  }

  close() {
    this.onButtonClicked.emit()
  }

}
