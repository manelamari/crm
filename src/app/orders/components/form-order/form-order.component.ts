import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../../core/models/order';
import { StatusOrder } from '../../../core/enums/status-order.enum';
import{FormBuilder,FormGroup, Validators} from '@angular/forms';
import { ClientsService } from '../../../clients/services/clients.service';
import { Observable } from 'rxjs';
import { Client } from '../../../core/models/client';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss',
})
export class FormOrderComponent {
  status = Object.values(StatusOrder);
  @Input() init!: Order;
  @Output() submitted = new EventEmitter<Order>();
  form!: FormGroup;
  // Observable pour la liste des clients
  clients$!: Observable<Client[]>;
  // form2 = new FormGroup({
  //   tjmHt: new FormControl(this.init.tjmHt),
  //   nbJours: new FormControl(this.init.nbJours),
  // });
  constructor(private fb: FormBuilder, private clientService: ClientsService) {}

  ngOnInit() {
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      states: [this.init.state],
      client: [
        this.init.client,
        // [
           Validators.required,
        //   Validators.minLength(2),
        //   Validators.maxLength(20),
        //],
      ],
      comment: [this.init.comment],
      typePresta: [this.init.typePresta, Validators.required],
      id: [this.init.id],
    });
    // Récupérer la liste des clients à partir du service
    this.clients$ = this.clientService.collection;
  }

  submit() {
    this.submitted.emit(this.form.value);
  }
}

