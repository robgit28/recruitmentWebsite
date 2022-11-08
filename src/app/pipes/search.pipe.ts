import { Pipe, PipeTransform } from '@angular/core';
//import { Vacancy } from './models/vacancy';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // change any[] to job model []
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    const filteredVacancies = items.filter(vacancy => {
      return vacancy.title.toLowerCase().includes(searchText.toLowerCase());
    }); 

    return filteredVacancies; 
  }
}
