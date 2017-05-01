import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Action } from "classes/Action";
import { User } from "classes/user";
import { Prospect } from "classes/Prospect";


@Component({
  selector: 'appointment-modal',
  templateUrl: './add-appointment-modal.component.html',
  styleUrls: ['./add-appointment-modal.component.css']
})
export class AddAppointmentModalComponent implements OnInit { 

@Output() onButtonClicked: EventEmitter<any> = new EventEmitter<any>();
currentUser:User; 
currentProspect:Prospect;  

  submitForm(){     
    console.log(this.currentProspect);
    console.log(this.currentUser); 

    this.onButtonClicked.emit()
  }
 
  constructor() { 
  }

  ngOnInit() {  
    this.currentProspect = JSON.parse(localStorage.getItem('currentProspect'));
    this.currentUser =  JSON.parse(localStorage.getItem('currentUser')); 
  }

}
