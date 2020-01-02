import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string, label: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    if (searchText === '' || items === null) { return []; }
    return items.filter(e => e[label].toLowerCase().indexOf(searchText) > -1 );
  }

}
