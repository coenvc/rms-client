import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Action } from "classes/Action";
import { User } from "classes/user";
import { Prospect } from "classes/Prospect";
import { ActionDataService } from "../action-data.service";
import { ActionType } from "classes/ActionType";
import { FormsModule, FormGroup, FormControl } from "@angular/forms";
import { Status } from 'classes/status';
import { StatusDataService } from '../status-data.service';
import { ProspectDataService } from "app/prospect-data.service";


@Component({
  selector: 'complete-action-modal',
  templateUrl: './complete-action-modal.component.html',
  styleUrls: ['./complete-action-modal.component.css', '../../styles/buttons.css', '../../styles/forms.css', '../../styles/modal.css'],
  providers: [ActionDataService]
})

export class CompleteActionModalComponent implements OnInit {
  currentAction: Action;
  statusses: Status[];
  prospect: Prospect;
  status: Status;
  statusText: String;

  @Input("prospectId") prospectId: number;

  @Output() onButtonClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(public ActionService: ActionDataService,
    public statusService: StatusDataService,
    public prospectService: ProspectDataService) {
    this.currentAction = JSON.parse(localStorage.getItem('currentAction'));
    statusService.getAll().subscribe(r => this.statusses = r)


  }

  ngOnInit() {
    this.prospectService.getProspectById(this.prospectId).subscribe(r => {
      this.prospect = r
      this.status = this.prospect.status
      this.statusText = this.prospect.status.content;
    })
        
  }

  submitForm(status) {
    this.currentAction.completed = true;

    this.statusService.getStatusById(status).subscribe(r => {
      this.status = r;

      this.prospectService.getProspectById(this.prospectId).subscribe(r => {
        this.prospect = r;
        this.prospect.status = this.status;
        this.currentAction.prospect = this.prospect;

        this.prospectService.update(this.prospect).subscribe(r => {
          this.ActionService.updateAction(this.currentAction).subscribe(r => this.onButtonClicked.emit())
        })
      })
    }
    )
  }

  close() {
    this.onButtonClicked.emit()
  }
}
