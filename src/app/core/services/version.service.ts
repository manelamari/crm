import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  // Un BehaviorSubject
 numVersion$ = new BehaviorSubject(1);

  constructor() {}

  incrementVersion() {
  this.numVersion$.next(this.numVersion$.value + 1);
    // Un emettre un flux de données

    //this.numVersion.next(valeur);
    console.log( this.numVersion$.value+1);
  }
}
