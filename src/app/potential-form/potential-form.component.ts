import { Component, OnInit } from '@angular/core';
import {Prospect} from 'classes/Prospect'
import { Address } from 'classes/Address'
import { Profession } from "classes/Profession";
import { SocialLinks } from "classes/SocialLinks";
import { Status } from "classes/Status";
@Component({
  selector: 'app-potential-form',
  templateUrl: './potential-form.component.html',
  styleUrls: ['./potential-form.component.css']
})
export class PotentialFormComponent implements OnInit {
  //Model used to bind form to 
  prospect:Prospect 
  
  submittend = false; 
  constructor() { }

  ngOnInit() {
    let address = new Address("Guido Gezellelaan","21","Berkel-Enschot","5056TK"); 
    let profession = new Profession("Programmeur");  
    let social = new SocialLinks("http://www.myfacebook.com","http://www.mylinkedin.com","http://www.mytwitter.com");
    let status = new Status("Active");  
    this.prospect = new Prospect("Coen van Campenhout","0683992086",address,profession,social,status,"coenvc@gmail.com");
  }  
 
  onsubmit(){ 
    this.submittend = true;
  }

  showModel(){ 
    console.log(this.prospect);
  }

  //TODO: used for form debugging, remove when app goes into production 
  get diagnostic(){ 
    return JSON.stringify(this.prospect)
  }
}
