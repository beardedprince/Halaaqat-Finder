import { Component, OnInit } from '@angular/core';
import {HalqahService} from '../halqah.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  halqahList: object;
  constructor( private data: HalqahService, private title: Title, private meta: Meta) { }

  ngOnInit() {
    // page title and meta tags
    this.title.setTitle('Halaqaat-finder - Home ');
    this.meta.addTags([
      {name: 'title', content: 'Halaqaat-finder'},
      {name: 'description', content: 'Get comprehensive list of different halaqaat in different states and timing'},
      {name: 'keywords', content: 'Halaqaat, Islamic Halaqaat, Lecture, Knowledge gathering, Islamic Lecures, Sunnah path'},
      {name: 'image', content: './favicon.ico'},
      {name: 'site', content: 'Halaqaat-finder'},
      {name: 'author', content: 'BeardedPrince'},
      {name: 'robot', content: 'index, follow'}
    ]);

    // Service
    this.data.getHalaqaat().subscribe(result => {
        this.halqahList = result;
        console.log(result);
      }
    );
  }
}
