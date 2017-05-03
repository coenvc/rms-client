import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Prospect } from "classes/Prospect";
import { ProspectDataService } from "app/prospect-data.service";
import { ActionService } from "app/action-service.service";
import { Action } from "classes/Action";
import { Status } from "classes/Status";
import { StatusDataService } from "app/status-data.service";

@Component({
  selector: 'app-prospect-details',
  templateUrl: './prospect-details.component.html',
  styleUrls: ['./prospect-details.component.css']
})
export class ProspectDetailsComponent implements OnInit {
  Status:Status[];
  Actions: Action[];
  Prospect: Prospect;
  addAppointmentModalVisible: boolean = false;
  completeAppointmentModalVisible: boolean = false; 
  parentTitle:string;
  providers: [ProspectDataService,ActionService,StatusDataService]

  constructor(ProspectDataService: ProspectDataService, ActionsDataService: ActionService,StatusDataService: StatusDataService) { 
    
    this.Prospect = new Prospect();
    
    ProspectDataService.getProspectById(42).subscribe(
      request => this.Prospect = request,
      error => console.log(this.Prospect)
    )
    ProspectDataService.getProspectById(42).subscribe(
      request => console.log(request),
      error => console.log(this.Prospect)
    ) 

    ActionsDataService.getProspectActionsUnsorted(42).subscribe(
      request=> this.Actions = request, 
      error=> console.log(error)
    )

     ActionsDataService.getProspectActionsUnsorted(42).subscribe(
      request=> console.log(request), 
      error=> console.log(error)
    )  
  }

  showAppointmentModal() {
    localStorage.setItem('currentProspect',JSON.stringify(this.Prospect)); 
    this.addAppointmentModalVisible = true;
  }

  hideAppointmentModal() {
    this.addAppointmentModalVisible = false;
  }

  postAppointment() {

  }

  completeAppointment() {

  }

  showCompleteActionModal(event) {
    let id = event.target.attributes.id.value; 
    for(let action of this.Actions){ 
        if(action.id == id){  
          if(action.completed == false){
          localStorage.setItem('currentAction',JSON.stringify(action));
          }
        }
    }
    this.completeAppointmentModalVisible = true;
  }

  hideCompleteActionModal() { 
    this.completeAppointmentModalVisible = false;
  } 

  completeAction(event){   
    let Ation = new Action()
    let id = event.target.attributes.id.value;
    for(let action of this.Actions){ 
        if(action.id == id){  
          if(action.completed == false){
          action.completed = true; 
          action.description = "completed";  
          event.srcElement.className += " checked" 
          }
        }
    }
  }

  

  ngOnInit() { 

  }
} 

