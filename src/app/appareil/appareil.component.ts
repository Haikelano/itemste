import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
 @Input() appareilName: string;
 @Input() appareilSatus: string;
 @Input() indexOfAppareil: number;
 @Input() id: number;
  constructor(private  appareilService: AppareilService) { }

  ngOnInit() {
  }
getStatus() {
    return this.appareilSatus ;
  }
  getColor() {
    if (this.appareilSatus === 'allumer'){
      return 'green';
          }
      else
        if (this.appareilSatus === 'éteint'){
      return 'red';
      }
  }
  oneAllumer() {
  this.appareilService.one(this.indexOfAppareil);
  }
}
