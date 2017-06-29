import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prospect } from 'classes/Prospect';
import { ProspectDataService } from 'app/prospect-data.service';
import { ActionDataService } from '../action-data.service';
import { Action } from 'classes/Action';
import { Status } from 'classes/Status';
import { Profession } from 'classes/Profession';
import { Address } from '../../classes/Address';
import { SocialLinks } from 'classes/SocialLinks';
import { StatusDataService } from 'app/status-data.service';
import { PdfGenerateService } from 'app/pdf-generate.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-prospect-details',
  templateUrl: './prospect-details.component.html',
  styleUrls: ['./prospect-details.component.css', '../../styles/buttons.css']
})
export class ProspectDetailsComponent implements OnInit {
  Status: Status[];
  id: number;
  Actions: Action[];
  Prospect: Prospect;
  socialLinks: SocialLinks;
  address: Address;
  status: Status;
  profession: string;

  prospectId: number;

  addAppointmentModalVisible = false;
  completeAppointmentModalVisible = false;
  parentTitle: string;
  providers: [ProspectDataService, ActionDataService, StatusDataService];

  // tslint:disable-next-line:max-line-length
  constructor(public ProspectDataService: ProspectDataService, public ActionsDataService: ActionDataService, StatusDataService: StatusDataService, private route: ActivatedRoute, private pdfGenerateService: PdfGenerateService) {
    this.FetchIDFromUrl();
  }


  // method called by OnInit that gets our ID and once it has it activates GetObject
  FetchIDFromUrl() {
    this.route.params.subscribe(params => this.getObject(+params['id']));
  }

  // method called by FetchData that gets data by the ID from the url
  private getObject(id: number) {
    this.Prospect = new Prospect();
    this.socialLinks = new SocialLinks('', '', '');
    this.address = new Address();
    this.status = new Status();
    this.profession = '';

    this.ProspectDataService.getProspectById(id)
      .subscribe(request => this.splitObject(request),
      error => console.log(error));

    this.ActionsDataService.getProspectActionsUnsorted(id)
      .subscribe(request => this.Actions = request,
      error => console.log(error));

  }

  private splitObject(prospect: Prospect) {
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
    this.ActionsDataService.getProspectActionsUnsorted(this.Prospect.id)
      .subscribe(request => this.Actions = request,
      error => console.log(error));
  }


  showCompleteActionModal(event) {
    const id = event.target.attributes.id.value;

    const selectedAction = this.Actions.find(a => a.id == id && !a.completed);
    if (selectedAction != undefined) {
      localStorage.setItem('currentAction', JSON.stringify(selectedAction));
      this.completeAppointmentModalVisible = true;
    }
  }

  hideCompleteActionModal() {
    this.completeAppointmentModalVisible = false;
    this.ActionsDataService.getProspectActionsUnsorted(this.Prospect.id)
      .subscribe(request => this.Actions = request,
      error => console.log(error));
  }

  completeAction(event) {
    const Ation = new Action();
    const id = event.target.attributes.id.value;
    for (const action of this.Actions) {
      if (action.id == id) {
        if (action.completed == false) {
          action.completed = true;
          action.description = 'completed';
          event.srcElement.className += ' checked';
        }
      }
    }
  }

    generateProposal() {
    this.pdfGenerateService.generate(this.Prospect)
      .subscribe(res => {
        const blob = new Blob([res], { type: 'application/pdf' });
        const name = 'Proposal-Formulier_' +
          this.Prospect.firstName +
          '-' +
          this.Prospect.infix +
          '-' +
          this.Prospect.surname;

        saveAs(blob, name, false);
      });
  }

  ngOnInit() {
    localStorage.setItem('currentProspect', JSON.stringify(this.Prospect));
  }
}

