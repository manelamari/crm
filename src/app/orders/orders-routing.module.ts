import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from '../clients/pages/page-list-clients/page-list-clients.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';

const routes: Routes = [
  //orders/
  { path: '', component: PageListOrdersComponent },
  //orders/add
  { path: 'add', component: PageAddOrderComponent},
  // orders/edit
  { path: 'edit', component: PageEditOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
