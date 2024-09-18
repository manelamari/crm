import { Component } from '@angular/core';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrl: './page-add-order.component.scss',
})
export class PageAddOrderComponent {
  item = new Order();

  constructor(private ordersService: OrdersService, private router: Router) {}

  handleSubmit(item: Order) {
    //  1. Créer un order dans la BDD
    this.ordersService.add(item).subscribe(() => {
      //  2. Faire une redirection vers la page orders list
      this.router.navigate(['/orders']);
    });
  }
}
