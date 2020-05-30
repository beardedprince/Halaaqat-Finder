import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private path = environment.path;
  constructor(private http: HttpClient, private router: Router) { }

  loginAdmin(loginForm) {
    return this.http.post( this.path + '/login', loginForm);
  }

  registerAdmin(registerForm) {
    return this.http.post( this.path + '/register', registerForm);
  }

  adminProfile(id) {
    const url = `${this.path + '/admin'}/${id}`;
    return this.http.get( url, id);
  }

  logoutAdmin() {
    localStorage.removeItem('data');
    this.router.navigate(['/']);
  }
}
