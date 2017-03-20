import { Component, OnInit } from '@angular/core';
import { Prospect } from '../../classes/prospect';
import { NgClass } from "@angular/common"; 
import {ProspectDataService} from '../../../src/app/prospect-data.service' 
import {Test} from '../../../src/classes/TestProspect' 
import {SearchPipePipe} from '../../app/search-pipe.pipe'
@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  prospects:Prospect[];    
  pipes:[SearchPipePipe]
  test:Test; 
  name:string = ' '
  directives: [NgClass] 
  providers: [ProspectDataService]
  constructor(prospectDataService:ProspectDataService) { 
    // prospectDataService.getProspectById(3).subscribe(r=> console.log(r)) 
    prospectDataService.getAll().subscribe(r=> this.prospects = r)
    prospectDataService.getAll().subscribe(r=> console.log(r))
   }

  ngOnInit() {  
  
  }

}
