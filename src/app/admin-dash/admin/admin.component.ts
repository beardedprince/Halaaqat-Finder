import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HalqahService } from '../../halqah.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  postHalaqaat: FormGroup;
  success = false;
  submitted = false;
  constructor(private fb: FormBuilder, private data: HalqahService, private router: Router) {
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
       this.data.postHalqah(this.postHalaqaat.value).subscribe( data => {
           this.success = true;
           this.router.navigate(['/admin', 'dashboard']);
           this.success = false;
       });
     }
  }

}
