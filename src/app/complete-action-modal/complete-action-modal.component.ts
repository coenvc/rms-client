import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Action } from "classes/Action";
import { User } from "classes/user";
import { Prospect } from "classes/Prospect";
import { ActionService } from "app/action-service.service";
import { ActionType } from "classes/ActionType";
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'complete-action-modal',
  templateUrl: './complete-action-modal.component.html',
  styleUrls: ['./complete-action-modal.component.css'], 
  providers: [ActionService]
})
export class CompleteActionModalComponent implements OnInit { 
currentAction:Action; 

@Output() onButtonClicked: EventEmitter<any> = new EventEmitter<any>();   

  constructor(public ActionService:ActionService) {      
    this.currentAction  = JSON.parse(localStorage.getItem('currentAction'));
  }
 
  complete(){   
    this.onButtonClicked.emit() 
  }
 
  clicked(event){ 
    console.log(event)
  }
  ngOnInit() {   

  }  

  submitForm(){ 
    this.currentAction.completed = true; 
    this.ActionService.updateAction(this.currentAction) 
      .subscribe( 
        data => console.log(data)
      );
    this.onButtonClicked.emit() 
    location.reload()
  }

  close(){ 
    this.onButtonClicked.emit()
  }

}
