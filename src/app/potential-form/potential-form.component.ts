import { Component, OnInit } from '@angular/core';
import {Prospect} from 'classes/Prospect'
import { Address } from 'classes/Address'
import { Profession } from "classes/Profession";
import { SocialLinks } from "classes/SocialLinks";
import { Status } from "classes/Status"; 
import {ProspectDataService} from '../prospect-data.service'; 
@Component({
  selector: 'app-potential-form',
  templateUrl: './potential-form.component.html',
  styleUrls: ['./potential-form.component.css']
})
export class PotentialFormComponent implements OnInit {
  //Model used to bind form to 
  prospect:Prospect 
  status:string[] = ["active","non-active","ended","denied"] 
  submittend = false; 
  constructor(private prospectDataService:ProspectDataService) { }

  ngOnInit() {
    let address = new Address("","","",""); 
    let profession = new Profession("");  
    let social = new SocialLinks("","","");
    let status = new Status("");  
    this.prospect = new Prospect("","","","",address,profession,social,status,"",""); 

  }  

  onsubmit(){ 
    this.submittend = true;
  }

  showModel(){ 
    console.log(this.prospect);
  } 

  submit(){ 
    this.prospectDataService.register(this.prospect)
        .subscribe( 
          (response)=> console.log(response), 
          (error)=> console.log(error)
          );
  }

  //TODO: used for form debugging, remove when app goes into production 
  get diagnostic(){ 
    return JSON.stringify(this.prospect)
  }
}
