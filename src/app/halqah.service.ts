import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HalqahService {

  constructor(private http: HttpClient) { }


  getHalaqaat() {
    return this.http.get('https://codepen.io/princeollie/pen/zYxEzoe.js');
  }
}
