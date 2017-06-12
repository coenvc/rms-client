import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'settingsMemberFilter'
})
export class SettingsMemberFilterPipe implements PipeTransform {

  transform(value: any[], args: string): any {
     if (!args[0]) {
       return value;
     }

     else  if (value) {  
      return value.filter(item => item.name.toLowerCase().indexOf(args) !== -1 );
     }
  }

}
