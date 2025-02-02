import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';

const routes: Routes = [

  //clients/
  { path: '', component: PageListClientsComponent },
  //clients/add
  { path: 'add', component: PageAddClientComponent},
  // clients/edit
  { path: 'edit', component: PageEditClientComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
