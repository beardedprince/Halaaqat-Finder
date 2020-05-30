import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminComponent } from './admin/admin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FrontviewComponent } from './frontview/frontview.component';


import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    FeedbackComponent,
    LoginComponent,
    RegisterComponent,
    FrontviewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      { path: 'login', component: LoginComponent },
      {path: 'register', component: RegisterComponent },
      {path: 'new-post', component: AdminComponent },
      {path: 'dashboard', component: FrontviewComponent },
      {path: 'feedback', component: FeedbackComponent },

    ])
  ],
  exports: [
    AdminComponent,
    FeedbackComponent,
    LoginComponent,
    RegisterComponent,
    FrontviewComponent
  ]
})
export class AdminDashModule { }
