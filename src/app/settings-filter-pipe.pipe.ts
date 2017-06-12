import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'settingsFilterPipe'
})
export class SettingsFilterPipePipe implements PipeTransform {

   transform(value: any[], args: string): any {
     if (!args[0]) {
       return value;
     }

     else  if (value) {  
      return value.filter(item => item.content.toLowerCase().indexOf(args) !== -1 );
     }
  }

}
