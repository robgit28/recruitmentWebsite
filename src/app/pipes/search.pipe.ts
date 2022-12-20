import { Pipe, PipeTransform } from '@angular/core';
//import { Vacancy } from './models/vacancy';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
// multi filter seaqrch pipe 
  transform(items: any[], value: string, prop: string): any[] {
    if (!items)
      return [];
    if (!value)
      return items;
    return items.filter(singleItem =>
      // this currently works 
      singleItem[prop].toLowerCase().startsWith(value.toLowerCase())
      //Object.keys(singleItem).some(k => singleItem[k].includes(value.toLowerCase()))
      //singleItem[prop].toLowerCase().some(prop => singleItem[prop].includes(value.toLowerCase())
    );
  }
}
