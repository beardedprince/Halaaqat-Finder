import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HalqahService {


  private path = environment.path;


  constructor(private http: HttpClient) { }


  postHalqah(postHalaqaat) {
    return this.http.post<any>( this.path + '/halaqaat', postHalaqaat);
  }

  getHalaqaatLocal() {
    return this.http.get( this.path + '/halaqaat');
  }

  getSingleHalaqahByID(id) {
    const url = `${this.path + '/halaqaat'}/${id}`;
    return this.http.get( url, id);
  }

  editHalqah(id: any, editHalaqaatForm) {
    const url = `${this.path + '/halaqaat'}/${id}`;
    return this.http.put( url, editHalaqaatForm);
  }

  deleteHalqah(id) {
    const url = `${this.path + '/halaqaat'}/${id}`;
    return this.http.delete( url);
  }
  sendFeedBack(feedBackForm) {
    return this.http.post( this.path + '/contact', feedBackForm);
  }

  getFeedBack() {
    return this.http.get( this.path + '/contact');
  }
}
