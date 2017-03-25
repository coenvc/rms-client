import { Pipe, PipeTransform } from '@angular/core';
import { Prospect } from 'classes/prospect'
import {ProspectDataService} from '../../src/app/prospect-data.service'
@Pipe({
  name: 'search' 
})
export class SearchPipePipe implements PipeTransform {
  
  transform(prospects: Prospect[], args: string): any {  
    console.log(args)
    if(!args){
      return prospects
    }  
    if(!prospects){ 
      return prospects
    }
    else{ 
      return prospects.filter(prospect => 
      prospect.name.toLowerCase()
      .indexOf(args.toLowerCase())!== -1)
    }
  } 
}
