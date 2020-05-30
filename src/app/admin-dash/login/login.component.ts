import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Title, Meta} from '@angular/platform-browser';
import { UserService } from '../../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  success = false;
  submitted = false;
  isLoading = false;

  constructor( private fb: FormBuilder, private title: Title,
               private meta: Meta, private user: UserService,
               private router: Router, private route: ActivatedRoute) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.title.setTitle(' Halaqaat-finder | Login');
    this.meta.addTags([
      {content: 'description'}
    ]);
  }

  login() {
    this.submitted = true;
    if ( this.loginForm.invalid) {
      return;
    } else {
      this.success = true;
      this.user.loginAdmin(this.loginForm.value).subscribe( data => {
        localStorage.setItem('data', JSON.stringify(data));
        this.success = false;
        this.router.navigate(['/admin', 'dashboard']);
      }, err => {
        console.log('err', err);
        alert(err.error);
      });
    }
  }

}
