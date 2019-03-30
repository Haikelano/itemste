import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;
  apareilSubscription: Subscription;
  appareils: any[];
  lastUpdate = new Promise(
    ((resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    })
  );


  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      },
      4000
    );
  }

  onAllumer() {
    console.log('on aluler tous , Afficher tous les status des appareils');
    for (let appareil of this.appareils) {
      console.log(appareil.status);
    }
  }

  allumerT() {
    this.appareilService.allTous();
    console.log(' Afficher tous les status des appareils apres les modifications');
    for (let appareilk of this.appareils) {
      console.log(appareilk);
    }
  }

  ngOnInit(): void {
    this.apareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareil();
  }
}
