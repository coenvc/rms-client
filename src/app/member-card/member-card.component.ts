import { Component, OnInit } from '@angular/core';
import { Prospect } from '../../classes/prospect';
import { NgClass } from "@angular/common"; 
import {ProspectDataService} from '../../../src/app/prospect-data.service' 
import {Test} from '../../../src/classes/TestProspect' 
import {SearchPipePipe} from '../../pipes/search-pipe.pipe' 
import {FilterPipe} from '../../pipes/filter.pipe'
@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
  prospects:Prospect[];    
  pipes:[SearchPipePipe,FilterPipe] 
  status:string = ''
  test:Test; 
  name:string = '' 
  initialProspects:Prospect[]
  directives: [NgClass] 
  providers: [ProspectDataService]
  constructor(prospectDataService:ProspectDataService) { 
    prospectDataService.getAll().subscribe(request=> this.initialProspects = request)
    prospectDataService.getAll().subscribe(request=>this.prospects = request);
   }
   reloadMembers(){ 
     console.log('entered a reload')
      if(this.prospects != this.initialProspects){ 
        console.log('reloaded')
        this.prospects = this.initialProspects  
      }
   }

   filterMember(e){    
      this.reloadMembers()   
      let memberStatus = e.srcElement.attributes[1].nodeValue;   
      let filterPipe = new FilterPipe() 
      this.prospects = filterPipe.transform(this.prospects,memberStatus)
   } 

   searchmember(){ 
     console.log(this.name)
   }
   


  ngOnInit() {   
}

}
