import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Prospect } from "classes/Prospect";
import { ProspectDataService } from "app/prospect-data.service";

@Component({
  selector: 'app-prospect-details',
  templateUrl: './prospect-details.component.html',
  styleUrls: ['./prospect-details.component.css']
})
export class ProspectDetailsComponent implements OnInit {

  Prospect: Prospect;
  addAppointmentModalVisible: boolean = false;
  completeAppointmentModalVisible: boolean = false;
  providers: [ProspectDataService]

  constructor(ProspectDataService: ProspectDataService) { 
    
    this.Prospect = new Prospect();
    ProspectDataService.getProspectById(3).subscribe(
      request => this.Prospect = request,
      error => console.log(this.Prospect)
    )
    ProspectDataService.getProspectById(3).subscribe(
      request => console.log(request),
      error => console.log(this.Prospect)
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

