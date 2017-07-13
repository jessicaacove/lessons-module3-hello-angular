import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // in a template you use the pipe like this:
  // {{ userName | capitalize }}

  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

    // "new york" -> "New York"
    // {{ "new york" | capitalize }}
  transform(value: any, args?: any): any {
      // the value variable is the thing that you are modifying
      // (the thing on the left of the "|")
      // value = "new york";
      //
      // split up words by spaces.
      const wordsArray = value.split(' ');

      // capitalize the pieces
      let capitalizedWords = wordsArray.map((word) => {
      return  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });

      // join capitalized pieces together
      return capitalizedWords.join(' ');
  }
}
