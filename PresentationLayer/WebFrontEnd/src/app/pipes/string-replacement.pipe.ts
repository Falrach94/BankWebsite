import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringReplacement'
})
export class StringReplacementPipe implements PipeTransform {

  transform(value: string): string {  
    let re = /\+/gi
    return value.replace(re, " ");
  }

}
