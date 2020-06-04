import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminComponent } from './admin/admin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FrontviewComponent } from './frontview/frontview.component';


import { ReactiveFormsModule } from '@angular/forms';
import { EditHalqahComponent } from './edit-halqah/edit-halqah.component';

@NgModule({
  declarations: [
    AdminComponent,
    FeedbackComponent,
    LoginComponent,
    RegisterComponent,
    FrontviewComponent,
    EditHalqahComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      { path: 'login', component: LoginComponent },
      {path: 'register', component: RegisterComponent },
      {path: 'new-halaqah', component: AdminComponent },
      {path: 'dashboard', component: FrontviewComponent },
      {path: 'feedback', component: FeedbackComponent },
      {path: 'edit-halaqah/:id', component: EditHalqahComponent },

    ])
  ],
  exports: [
    AdminComponent,
    FeedbackComponent,
    LoginComponent,
    RegisterComponent,
    FrontviewComponent,
    EditHalqahComponent
  ]
})
export class AdminDashModule { }
