import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HalqahService } from '../halqah.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  postHalaqaat: FormGroup;
  success = false;
  submitted = false;
  constructor(private fb: FormBuilder, private data: HalqahService) {
    this.postHalaqaat = this.fb.group({
      state: ['', Validators.required],
      teacher: ['', Validators.required],
      book: ['', Validators.required],
      days: ['', Validators.required],
      time: ['', Validators.required],
      venue: ['', Validators.required],

    });
  }

  ngOnInit() {
  }
  posthalaqahForm() {
    this.submitted = true;
    if (this.postHalaqaat.invalid) {
       return;
     } else {
       this.success = true;
     }
    this.data.postHalqah(this.postHalaqaat.value).subscribe( data => {
      console.log(data);

    });
  }

}
