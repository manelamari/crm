import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSignInComponent } from './login/pages/page-sign-in/page-sign-in.component';
import{PageSignUpComponent} from './login/pages/page-sign-up/page-sign-up.component';
import{PageResetPasswordComponent} from './login/pages/page-reset-password/page-reset-password.component';
import{PageForgotPasswordComponent}from './login/pages/page-forgot-password/page-forgot-password.component';
import { OrdersModule } from './orders/orders.module';
import { PageNotFoundComponent } from './page-not-found/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  // { path: 'signin', component: PageSignInComponent },
  // { path: 'sign-up', component: PageSignUpComponent },
  // { path: 'reset', component: PageResetPasswordComponent },
  // { path: 'forgot', component: PageForgotPasswordComponent },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
  // {
  //   path: 'orders',
  //   children: [
  //     // orders/
  //     { path: '', component: PageListOrdersComponent },

  //     // orders/add
  //     { path: 'add', component: PageAddOrderComponent },

  //     // orders/edit
  //     { path: 'edit', component: PageEditOrderComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
