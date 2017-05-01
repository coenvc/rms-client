import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Prospect } from "classes/Prospect";
import { ProspectDataService } from "app/prospect-data.service";
import { ActionService } from "app/action-service.service";
import { Action } from "classes/Action";

@Component({
  selector: 'app-prospect-details',
  templateUrl: './prospect-details.component.html',
  styleUrls: ['./prospect-details.component.css']
})
export class ProspectDetailsComponent implements OnInit {

  Actions: Action[];
  Prospect: Prospect;
  addAppointmentModalVisible: boolean = false;
  completeAppointmentModalVisible: boolean = false;
  providers: [ProspectDataService,ActionService]

  constructor(ProspectDataService: ProspectDataService, ActionsDataService: ActionService) { 
    
    this.Prospect = new Prospect();
    ProspectDataService.getProspectById(42).subscribe(
      request => this.Prospect = request,
      error => console.log(this.Prospect)
    )
    ProspectDataService.getProspectById(42).subscribe(
      request => console.log(request),
      error => console.log(this.Prospect)
    )    

    ActionsDataService.getByProspectId(42).subscribe( 
      request => console.log(request), 
      error => console.log(error)
    );

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

  showCompleteActionModal() {

    this.completeAppointmentModalVisible = true;
  }

  hideCompleteActionModal() {
    this.completeAppointmentModalVisible = false;
  }

  

  ngOnInit() { 

      localStorage.setItem('currentProspect',JSON.stringify(this.Prospect));
      let elements = document.getElementsByTagName("div");
      for (let i = 0; i < elements.length; i++) { 
        let element = elements[i]; 
        let showModal = this.showAppointmentModal;
        element.onclick = function (event) { 
          if (event.srcElement.classList.contains("appointment-check") == true) { 
              if(event.srcElement.classList.contains("checked") == true){ 
                event.srcElement.classList.remove("checked");
              }
              else{   
               event.srcElement.className += " checked"  
              }
          }

        }
      }
  }
} 

