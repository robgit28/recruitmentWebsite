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

    // only searches one property 
    // const filteredVacancies = items.filter(vacancy => {
    //   return vacancy.title.toLowerCase().includes(searchText.toLowerCase());
    // }); 
    // return filteredVacancies; 
   
    // doesn't work 
    // return items.filter(vacancy => {
    //   Object.keys(vacancy).forEach(key => {
    //     if (vacancy[key].toLowerCase().includes(searchText.toLowerCase())) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   })
    // }); 

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
