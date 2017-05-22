import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Action } from "classes/Action";
import { User } from "classes/user";
import { Prospect } from "classes/Prospect";
import { ActionDataService } from "../action-data.service";
import { ActionType } from "classes/ActionType";
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'complete-action-modal',
  templateUrl: './complete-action-modal.component.html',
  styleUrls: ['./complete-action-modal.component.css', '../../styles/buttons.css', '../../styles/forms.css', '../../styles/modal.css'],
  providers: [ActionDataService]
})
export class CompleteActionModalComponent implements OnInit {
  currentAction: Action;

  @Output() onButtonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(public ActionService: ActionDataService) {
    this.currentAction = JSON.parse(localStorage.getItem('currentAction'));
  }

  ngOnInit() {

  }

  submitForm() {
    this.currentAction.completed = true;
    this.ActionService.updateAction(this.currentAction)
      .subscribe(response => this.onButtonClicked.emit(), error => console.log(error));
  }

  close() {
    this.onButtonClicked.emit()
  }
}
