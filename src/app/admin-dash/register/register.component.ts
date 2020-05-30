import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  success = false;
  submitted = false;
  isLoading = false;

  constructor(private fb: FormBuilder, private user: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.success = true;
      this.isLoading = true;
      this.user.registerAdmin(this.registerForm.value).subscribe( data => {
            this.success = false;
            this.isLoading = false;
            this.router.navigate(['/admin', 'login']);
      }, err => {
        console.log('err', err);
      });
    }
    }

}
