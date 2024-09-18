import { StatusOrder } from "../enums/status-order.enum";

export interface OrderI {
  id: number;
  tjmHt: number;
  nbJours: number;
  tva: number;
  state: string;
  typePresta: string;
  client: string;
  comment: string;
  totalHT(): number;
  totalTTC(): number;
}
