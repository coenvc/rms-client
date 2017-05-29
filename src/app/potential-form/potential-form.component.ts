import { Component, OnInit } from '@angular/core';
import { Prospect } from 'classes/Prospect'
import { Address } from 'classes/Address'
import { Profession } from "classes/Profession";
import { SocialLinks } from "classes/SocialLinks";
import { Status } from "classes/Status";
import { ProspectDataService } from '../prospect-data.service';
import { HeaderComponent } from '../header/header.component'
import { FormGroup, FormControl } from "@angular/forms";
import { StatusDataService } from '../status-data.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-potential-form',
  templateUrl: './potential-form.component.html',
  styleUrls: ['./potential-form.component.css', '../../styles/buttons.css', '../../styles/forms.css']
})
export class PotentialFormComponent implements OnInit {
  //Model used to bind form to 
  submittend = false;
  prospect: Prospect;
  statuses: Status[]
  potentialForm: FormGroup;

  constructor(private prospectDataService: ProspectDataService, private statusDataService: StatusDataService, private router: Router) {
  }

  ngOnInit() {
    this.potentialForm = new FormGroup({
      'voornaam': new FormControl(null),
      'tussenvoegsel': new FormControl(""),
      'achternaam': new FormControl(null),
      'beroep': new FormControl(null),
      'status': new FormControl(null),
      'beschrijving': new FormControl(null),
      'emailaddress': new FormControl(null),
      'phonenumber': new FormControl(null)
    });

    this.statusDataService.getAll().subscribe(response => {
      this.statuses = response;
    })
  }

  onSubmit() {
    let formValues = this.potentialForm.value;
    this.prospect = new Prospect();
    this.prospect.firstName = formValues.voornaam;
    this.prospect.surname = formValues.achternaam;
    this.prospect.infix = formValues.tussenvoegsel;
    this.prospect.profession = new Profession();
    this.prospect.profession.name = formValues.beroep;
    this.prospect.status = new Status();
    this.prospect.status.id = formValues.status.id;
    this.prospect.status.content = formValues.status.content;
    this.prospect.description = formValues.description;
    this.prospect.emailAddress = formValues.emailaddress;
    this.prospect.phoneNumber = formValues.phonenumber;
    this.prospectDataService.register(this.prospect)
      .subscribe(
      (response) => {
        console.log(response)
        this.router.navigate(['prospect']);
    },
      (error) => {console.log(error); alert(error)}
      );
  }

  //TODO: used for form debugging, remove when app goes into production 
  get diagnostic() {
    return JSON.stringify(this.prospect)
  }
}
