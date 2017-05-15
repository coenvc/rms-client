import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {ActiontypeDataService} from "app/actiontype-data.service";
import {ActionType} from "classes/ActionType";

@Component({
  selector: 'add-action-modal',
  templateUrl: './add-action-modal.component.html',
  styleUrls: ['./add-action-modal.component.css']
})
export class AddActionModalComponent implements OnInit {

  @Output() onButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  Action: ActionType = new ActionType();

  constructor(private ActionService: ActiontypeDataService) {

  }

  addStatus() {
    this.ActionService.register(this.Action)
      .subscribe(response => console.log(response))
    this.onButtonClicked.emit()
    location.reload()
  }

  close() {
    this.onButtonClicked.emit()
  }

  ngOnInit() {
  }

}
