import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedBackForm: FormGroup;
  success = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private title: Title, private meta: Meta) {
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

   ngOnInit() {
     this.title.setTitle('Halaqaat-finder - Contact');
     this.meta.updateTag({name: 'description', content: 'Help improve us by giving feedbacks'});
   }
}
