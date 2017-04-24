import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'appointment-modal',
  templateUrl: './add-appointment-modal.component.html',
  styleUrls: ['./add-appointment-modal.component.css']
})
export class AddAppointmentModalComponent implements OnInit { 

@Output() onButtonClicked: EventEmitter<any> = new EventEmitter<any>();


  submitForm(){  
    
    this.onButtonClicked.emit()

  }
 
  constructor() { 

  }

  ngOnInit() {
  }

}
