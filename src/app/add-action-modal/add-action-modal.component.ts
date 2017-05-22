import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {ActiontypeDataService} from "app/actiontype-data.service";
import {ActionType} from "classes/ActionType";
import { Router } from "@angular/router";

@Component({
  selector: 'add-action-modal',
  templateUrl: './add-action-modal.component.html',
  styleUrls: ['./add-action-modal.component.css']
})
export class AddActionModalComponent implements OnInit {

  @Output() onButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  Action: ActionType = new ActionType();

  constructor(private ActionService: ActiontypeDataService,private router:Router) {
 
  }

  addStatus() {
    this.ActionService.register(this.Action)
      .subscribe(response => console.log(response))   
    this.router.navigate(['settings'])
    this.onButtonClicked.emit()
      
  }

  close() {
  this.onButtonClicked.emit()
  }

  ngOnInit() {
  }

}
