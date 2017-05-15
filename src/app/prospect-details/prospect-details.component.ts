import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Prospect} from "classes/Prospect";
import {ProspectDataService} from "app/prospect-data.service";
import {ActionService} from "app/action-service.service";
import {Action} from "classes/Action";
import {Status} from "classes/Status";
import {Profession} from "classes/Profession";
import {Address} from "../../classes/Address";
import { SocialLinks } from "classes/SocialLinks";
import { StatusDataService } from "app/status-data.service";

@Component({
  selector: 'app-prospect-details',
  templateUrl: './prospect-details.component.html',
  styleUrls: ['./prospect-details.component.css']
})
export class ProspectDetailsComponent implements OnInit {
  Status:Status[];
  id: number;
  Actions: Action[];
  Prospect: Prospect;
  socialLinks: SocialLinks;
  address: Address;
  status: Status;
  profession: Profession;

  addAppointmentModalVisible: boolean = false;
  completeAppointmentModalVisible: boolean = false; 
  parentTitle:string;
  providers: [ProspectDataService,ActionService,StatusDataService]

  constructor(public ProspectDataService: ProspectDataService, public ActionsDataService: ActionService,StatusDataService: StatusDataService,private route: ActivatedRoute) { 
    
    this.FetchIDFromUrl();
    
    this.Prospect = new Prospect();
    ProspectDataService.getProspectById(1).subscribe(
      request => this.Prospect = request,
      error => console.log(this.Prospect)
    )

    ActionsDataService.getProspectActionsUnsorted(1).subscribe(
      request=> this.Actions = request, 
      error=> console.log(error)
    )

     ActionsDataService.getProspectActionsUnsorted(1).subscribe(
      request=> console.log(request), 
      error=> console.log(error)
    )   
  } 





  // method called by OnInit that gets our ID and once it has it activates GetObject
  FetchIDFromUrl(){
    this.route.params.subscribe(params => this.getObject(+params['id']));
  }

  // method called by FetchData that gets data by the ID from the url
  private getObject(id: number){
    this.Prospect = new Prospect();
    this.socialLinks = new SocialLinks("", "", "");
    this.address = new Address();
    this.status = new Status();
    this.profession = new Profession();

    this.ProspectDataService.getProspectById(id)
      .subscribe(request => console.log(this.splitObject(request)),
        error => console.log(error));

    this.ActionsDataService.getByProspectId(id)
      .subscribe(request => console.log(this.Actions = request),
        error => console.log(error));
  }

  private splitObject(prospect: Prospect){
    this.Prospect = prospect;
    this.socialLinks = prospect.socialLinks;
    this.address = prospect.address;
    this.status = prospect.status;
    this.profession = prospect.profession;
  }

  showAppointmentModal() {
    localStorage.setItem('currentProspect', JSON.stringify(this.Prospect));
    this.addAppointmentModalVisible = true;
  }

  hideAppointmentModal() {
    this.addAppointmentModalVisible = false;
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

    this.FetchIDFromUrl()

    localStorage.setItem('currentProspect', JSON.stringify(this.Prospect));
    let elements = document.getElementsByTagName("div");
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let showModal = this.showAppointmentModal;
      element.onclick = function (event) {
        if (event.srcElement.classList.contains("appointment-check") == true) {
          if (event.srcElement.classList.contains("checked") == true) {
            event.srcElement.classList.remove("checked");
          }
          else {
            event.srcElement.className += " checked"
          }
        }

      }
    }
  }
}

