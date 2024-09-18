import { StateClient } from '../enums/state-client';
export interface ClientI {
  id: number;
  state: StateClient;
  tva: number;
  name: string;
  totalCaHt: number;
  comment: string;
}
