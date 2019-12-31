import { Component, OnInit } from '@angular/core';
import {HalqahService} from '../halqah.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  halqahList: object;
  constructor( private data: HalqahService) { }

  ngOnInit() {
    this.data.getHalaqaat().subscribe(data => {
        this.halqahList = data;
      }
    );
  }
}
