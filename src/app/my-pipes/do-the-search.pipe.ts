import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doTheSearch'
})
export class DoTheSearchPipe implements PipeTransform {


    // *ngFor='let oneRock of (theRocks | doTheSearch: "fast")'
    // value = theRocks
    // searchTerm = "fast" (the value of the input, rockSearchText)
  transform(value: any, searchTerm: string): any {
    if (!value) {
      return [];
    }

    // if no search term is provided then return the original array
    if (!searchTerm) {
      return value;
    }

    let matchedResults = [];

    // lowercase search term so it works for all cases
    searchTerm = searchTerm.toLowerCase();

    value.forEach((oneItem) => {
      // lowercase the name so that it works for all cases
      if (oneItem.name.toLowerCase().includes(searchTerm)) {
        matchedResults.push(oneItem);
      }
    });

    return matchedResults;
  }

}
