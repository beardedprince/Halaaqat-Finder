import { Component, OnInit } from '@angular/core';
import { HalqahService } from '../../halqah.service';
import { UserService } from '../../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-frontview',
  templateUrl: './frontview.component.html',
  styleUrls: ['./frontview.component.css']
})
export class FrontviewComponent implements OnInit {

  halaqahList: object;
  admin: any;
  isLoading: false;

  constructor(private halaqah: HalqahService, private user: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHalqah();
    this.getAdmin();
  }

  getAdmin() {
    const getId = JSON.parse(localStorage.getItem('data'));
    console.log('localstorage', getId._id);
    this.user.adminProfile(getId._id ).subscribe( data => {
      this.admin = data;
    }, err => {
      console.log('unauthorized user!!!');
    });
  }

  getHalqah() {
    this.halaqah.getHalaqaatLocal().subscribe( data => {
      this.halaqahList = data;
    });
  }

  deleteHalaqah(id: string) {
    this.halaqah.deleteHalqah(id).subscribe( data => {
      console.log('da', data);
      if (data) {
         this.getHalqah();
       }
     }, err => {
       console.log('another error', err);
     });

  }

  logoutAdmin() {
    this.user.logoutAdmin();
  }

}
