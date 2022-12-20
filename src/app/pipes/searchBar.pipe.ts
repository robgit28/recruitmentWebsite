import { Pipe, PipeTransform } from '@angular/core';
//import { Vacancy } from './models/vacancy';

@Pipe({
  name: 'searchBar'
})
export class SearchBarPipe implements PipeTransform {

  // works with single search box 
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }

    return items.filter(vacancy =>
      Object.keys(vacancy).some(
        k =>
          vacancy[k] != null &&
          vacancy[k]
            .toString()
            .toLowerCase()
            .includes(searchText.toLowerCase())
      )
    );
  }
}
