import { Component, OnInit } from '@angular/core';
import {Prospect} from 'classes/Prospect'
import { Address } from 'classes/Address'
import { Profession } from "classes/Profession";
import { SocialLinks } from "classes/SocialLinks";
import { Status } from "classes/Status"; 
import {ProspectDataService} from '../prospect-data.service';
import { HeaderComponent } from '../header/header.component'
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-potential-form',
  templateUrl: './potential-form.component.html',
  styleUrls: ['./potential-form.component.css']
})
export class PotentialFormComponent implements OnInit {
  //Model used to bind form to 
  submittend = false; 
  prospect:Prospect; 
  status = ["active","non-active","ended","denied"]  
  potentialForm:FormGroup;

  constructor(private prospectDataService:ProspectDataService) {  
  }

  ngOnInit() {
    this.potentialForm = new FormGroup({ 
       'voornaam': new FormControl(null), 
       'tussenvoegsel':new FormControl(""), 
       'achternaam':new FormControl(null), 
       'beroep':new FormControl(null),
       'status':new FormControl("non-active"), 
       'beschrijving':new FormControl(null)   
    });
  }  

  onSubmit(){  
    let formValues = this.potentialForm.value;  
    this.prospect = new Prospect();   
    this.prospect.firstName = formValues.voornaam; 
    this.prospect.surname = formValues.achternaam;  
    this.prospect.infix = formValues.tussenvoegsel;
    this.prospect.profession = new Profession();
    this.prospect.profession.name = formValues.beroep; 
    this.prospect.status = new Status();
    this.prospect.status.content = formValues.status; 
    this.prospect.description = formValues.description;   
    this.prospectDataService.register(this.prospect) 
              .subscribe( 
                (response) => console.log(response), 
                (error) => alert(error)
    ); 
  }
  
  //TODO: used for form debugging, remove when app goes into production 
  get diagnostic(){ 
    return JSON.stringify(this.prospect)
  }
}
