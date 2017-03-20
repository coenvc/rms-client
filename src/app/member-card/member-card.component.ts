import { Component, OnInit } from '@angular/core';
import { Prospect } from '../../classes/prospect';
import { NgClass } from "@angular/common"; 
import {ProspectDataService} from '../../../src/app/prospect-data.service' 
import {Test} from '../../../src/classes/TestProspect'
@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  prospect:Prospect;   
  test:Test;
  directives: [NgClass] 
  providers: [ProspectDataService]
  constructor(prospectDataService:ProspectDataService) { 
    prospectDataService.getProspectById(3).subscribe(r=> console.log(r))
   }

  ngOnInit() {  
    // stub member for demo purposes
    this.prospect = new Prospect();  
    this.prospect.name = 'Niels Werkman'; 
    this.prospect.emailAddress = 'coenvc@gmail.com'; 
    this.prospect.facebookLink = 'http://myfacebooklink.com'; 
    this.prospect.jobTitle = 'Developer'; 
    this.prospect.status = 'accepted' 
    this.prospect.linkedinLink = 'http://mylinkedinlink.com' 
    this.prospect.phoneNumber = '0683992086'; 
    this.prospect.streetname = 'Guido Gezellelaan'; 
    this.prospect.housenumber = 21;  
    this.prospect.imageLink = 'http://www.pentascope.nl/wp-content/uploads/2013/03/Pasfoto-Michel.jpg'; 
  }

}
