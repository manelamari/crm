import { StateClient } from '../enums/state-client';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id!: number;
  state!: StateClient.INACTIVE;
  tva!: 20;
  name!: string;
  totalCaHt!: 200;
  comment!: string;
  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
