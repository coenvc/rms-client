import { Component, OnInit } from '@angular/core';
import { ActionService } from "app/action-service.service";
import { ActionOverview } from "classes/ActionOverview";
import { User } from "classes/user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../styles/buttons.css'], 
  providers: [ActionService]
})
export class DashboardComponent implements OnInit {
  ActionOverview: ActionOverview;
  AllActionsOverview:ActionOverview; 
  CurrentUser:User;  
  AllActionsVisible = false; 
  MyActionsVisible = true;  

  constructor(public ActionService:ActionService) { 
      this.CurrentUser = JSON.parse(localStorage.getItem('currentUser'));  
      this.ActionService.getUserActionOverview(this.CurrentUser.id) 
                        .subscribe(request => this.ActionOverview = request)
       this.ActionService.getUserActionOverview(6) 
                        .subscribe(request => console.log(request))     
      this.ActionService.getAllActionsOverview() 
                        .subscribe(request => this.AllActionsOverview = request)       
   }  

   showMyActions(event){ 
      this.AllActionsVisible = false; 
      this.MyActionsVisible = true; 
      var myButton = document.getElementById("allAppointmentsTab"); 
      myButton.className += " selected"  
      var otherButton  = document.getElementById("myAppointmentsTab"); 
      otherButton.className = "tabs"; 
   } 

   showAllActions(event){ 
      this.AllActionsVisible = true; 
      this.MyActionsVisible = false;
      var myButton = document.getElementById("myAppointmentsTab"); 
      myButton.className += " selected"  
      var otherButton  = document.getElementById("allAppointmentsTab"); 
      otherButton.className = "tabs";
   }

  ngOnInit() {
  }

}
