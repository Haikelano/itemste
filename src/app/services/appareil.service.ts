import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareilSubject = new Subject<any[]>();
 private appareils = [
    { id : 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    { id: 2,
      name: 'Ordinateur',
      status: 'allumer'
    },
    { id: 3,
      name: 'Ordinateur Gamer',
      status: 'éteint'
    }
  ];
 emitAppareil() {
   this.appareilSubject.next(this.appareils.slice());
 }
  allTous() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumer';
    }
    this.emitAppareil();
  }
  one(n: number) {
    this.appareils[n].status = 'allumer';
    this.emitAppareil();
  }
  getById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id;
      }
    );

    return appareil;
  }

  constructor() { }
}
