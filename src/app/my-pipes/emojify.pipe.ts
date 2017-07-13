import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojify'
})
export class EmojifyPipe implements PipeTransform {
  // the logic goes inside of "transform()" method.

  //"I like pizza and fencing" -> "I like * and *"
  // {{ "I like pizza and fencing" | emojify }}

  transform(value: any, args?: any): any {
    if (typeof value !== 'string') {
      return "";
    }

    // "pizza" will work only for lowercase
    // /pizza/ig will work for all cases (upper and lower and all instances(g = global))
    return value.replace(/pizza/ig, '🍕')
                .replace(/fencing/ig, '🤺')
                .replace(/gun/ig, '🔫')
                .replace(/avocado/ig, '🥑')
                .replace(/wine glass/ig, '🍷')
                .replace(/rocket/ig, '🚀');
  }
}
