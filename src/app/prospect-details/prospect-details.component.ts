import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prospect-details',
  templateUrl: './prospect-details.component.html',
  styleUrls: ['./prospect-details.component.css']
})
export class ProspectDetailsComponent implements OnInit {

  addAppointmentModalVisible:boolean = false; 

  completeAppointmentModalVisible:boolean = false;

  constructor() { }
 
  showAppointmentModal(){ 
    this.addAppointmentModalVisible = true; 
    console.log(this.addAppointmentModalVisible)
  } 

  hideAppointmentModal(){ 
    this.addAppointmentModalVisible = false;
  }  

  postAppointment(){ 

  } 

  completeAppointment(){ 

  }

  showCompleteActionModal(){ 
    this.completeAppointmentModalVisible = true;
  } 

  hideCompleteActionModal(){ 
    this.completeAppointmentModalVisible = false;
  }

  ngOnInit() {
  }

}
