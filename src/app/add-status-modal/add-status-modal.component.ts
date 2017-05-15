import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Status } from "classes/Status";
import { StatusDataService } from "app/status-data.service";

@Component({
  selector: 'add-status-modal',
  templateUrl: './add-status-modal.component.html',
  styleUrls: ['./add-status-modal.component.css'], 
  providers: [StatusDataService]
})
export class AddStatusModalComponent implements OnInit {
  @Output() onButtonClicked: EventEmitter<any> = new EventEmitter<any>(); 
  Status: Status = new Status();

  constructor(private StatusDataService:StatusDataService) {  

  } 

  addStatus(){ 
    this.StatusDataService.postStatus(this.Status) 
                          .subscribe(response=>console.log(response)) 
    this.onButtonClicked.emit() 
    location.reload()
  } 

  close(){ 
    this.onButtonClicked.emit()
  }

  ngOnInit() {
  }

}
