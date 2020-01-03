import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], input: string) {
    if (!value) {
      return [];
    }
    if (!input) {
      return value;
    }
    let valuesArr = [];
    if (input) {
      console.log(input);
      input = input.toLowerCase();
      return value.filter( (el: any) => {
        valuesArr = Object.keys(el).map(key => el[key]);
        return valuesArr.some((elm) => {
           if (JSON.stringify(elm).includes(input)) {
             return elm;
           }
           return null;
        });
      });
    }
    return value;
  }
    // if (searchText === '' || items === null) { return items; }
    // // tslint:disable-next-line:no-shadowed-variable
    // return items.filter((items) => items;
    // console.log(items);
    // return items.filter(e => e[label].toLowerCase().indexOf(searchText.toLowerCase()) !== -1 );
  // }

}
