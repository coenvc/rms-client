import {Pipe, PipeTransform} from "@angular/core";
import {Prospect} from "classes/Prospect";
@Pipe({
  name: 'search'
})
export class SearchPipePipe implements PipeTransform {

  transform(prospects: Prospect[], args: string): any {
    console.log(prospects)
    if (!args) {
      return prospects
    }
    if (!prospects) {
      return prospects
    }
    else {
      return prospects.filter(prospect =>
      prospect.fullName.toLowerCase()
        .indexOf(args.toLowerCase()) !== -1)
    }
  }
}
