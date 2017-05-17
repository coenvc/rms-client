import { Component, OnInit, Output, EventEmitter, Input, AfterViewChecked } from '@angular/core';
import { ActionType } from "classes/ActionType";
import { ActiontypeDataService } from "app/actiontype-data.service";

@Component({
  selector: 'edit-action-modal',
  templateUrl: './edit-action-modal.component.html',
  styleUrls: ['./edit-action-modal.component.css', '../../styles/buttons.css']
})
export class EditActionModalComponent implements OnInit {

  @Output() onButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  Action: ActionType = new ActionType();
  @Input('currentId') currentId: number;
  constructor(private ActionService: ActiontypeDataService) {

  }
  ngOnInit() {
    this.ActionService.getById(this.currentId)
      .subscribe(response => this.Action = response)
  }

  editAction() {
    this.Action.id = this.currentId
    this.ActionService.update(this.Action)
      .subscribe(response => this.onButtonClicked.emit())

  }

  addStatus() {

    this.onButtonClicked.emit();
  }

  close() {
    this.onButtonClicked.emit();
  }



}
