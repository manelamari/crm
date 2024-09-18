import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';
import { PageResetPasswordComponent } from './pages/page-reset-password/page-reset-password.component';
import { PageForgotPasswordComponent } from './pages/page-forgot-password/page-forgot-password.component';

const routes: Routes = [
  //auth/sing-in
  { path: 'sing-in', component: PageSignInComponent },
  //auth/sing-up
  { path: 'sing-up', component: PageSignUpComponent },
  //auth/reset
  { path: 'reset', component: PageResetPasswordComponent },
  //auth/forgot
  { path: 'forgot', component: PageForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
