import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import{Client}from '../../core/models/client';
import{HttpClient} from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  public collection$!: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }
  public get collection(): Observable<Client[]> {
    return this.collection$;
  }

  public set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }
  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}/clients/${id}`);
  }

  getClientName(id: number): Observable<string> {
    return this.getClientById(id).pipe(
      map((client: Client) => client.name), // Extraire le nom du client
      catchError(() => of('Inconnu')) // En cas d'erreur, renvoyer 'Inconnu'
    );
  }
  // Méthode pour rafraîchir la collection de clients pour le tp
  // public refreshCollection(): void {
  //   this.collection$ = this.http.get<Client[]>(`${this.urlApi}/clients`);
  // }
}

