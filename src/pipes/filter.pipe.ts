import { Pipe, PipeTransform } from '@angular/core';
import {Prospect} from 'classes/Prospect'
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(prospects: Prospect[], status:string): any { 
        if(!status){
      return prospects
    }  
    if(!prospects){ 
      return prospects
    }
    else{ 
      let returnvalue =  prospects.filter(prospect => prospect.status.content == status) 
      console.log(returnvalue) 
      return returnvalue
    } 
  }  
}
