import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../../core/models/order';
import { Observable } from 'rxjs';
import { StatusOrder } from '../../../core/enums/status-order.enum';
import { ClientsService } from '../../../clients/services/clients.service';
import { Client } from '../../../core/models/client';


@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss',
})
export class PageListOrdersComponent {
  headers: string[] = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  collection$!: Observable<Order[]>;
  status = Object.values(StatusOrder);
  clients!:Client[] ;
  title: string = 'Order List';
  myBtnLabel: string = 'Add Order';
  constructor(
    private ordersService: OrdersService,
    private clientService: ClientsService
  ) {
    
  }

  ngOnInit() {
    this.collection$ = this.ordersService.collection;
    this.clientService.collection.subscribe(clients=>{
      this.clients=clients
    })
  }

  ngOnDestroy() {
    console.log('Bye bye');
    // alert('Si vous quittez cette, vous allez perdre tous vos changements....');
  }
  total(val: number, coef: number, tva?: number): number {
    console.log('La méthode a été appelée');
    if (tva) return val * coef * (1 + tva / 100);
    return val * coef;
  }

  changeStatus(item: Order, $event: any) {
    const status = $event.target.value;
    this.ordersService.changeStatus(item, status).subscribe((data) => {
      Object.assign(item, data);
      // console.log('papi');
    });
  }

  // Utiliser cette méthode pour récupérer le nom du client
  getClientName(clientId: number) {
    const client= this.clients.find(client=>client.id==clientId);
    console.log(client?.name);
    return client?client.name:"inconnu";

  }
}
