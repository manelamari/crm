import { Component } from '@angular/core';
import{ClientsService} from '../../services/clients.service';
import { Client } from '../../../core/models/client';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.scss',
})
export class PageListClientsComponent {
  myTitle:string ='My Clients list';
  myBtnLabel: string ="Add Client";
  headers: string[] = ['state', 'name', 'totalCaHt', 'Tva','comment'];
  collection!: Client[];
  constructor(private clientsService: ClientsService) {
    this.clientsService.collection.subscribe((clients) => {
      this.collection = clients;
      console.log('Clients : ', clients);
    });
  }
}
