import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  feedBackForm: FormGroup;
  success = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.feedBackForm =  this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
   }
   submitForm() {
     this.submitted = true;
     if (this.feedBackForm.invalid) {
       return;
     } else {
       this.success = true;
     }
   }
}
