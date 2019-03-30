import {SelectionModel} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {BehaviorSubject, Observable} from 'rxjs';
import {WorkflowService} from '../services/workflow.service';

/**
 * @title Tree with checkboxes
 */
@Component({ selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
  })
export class WorkflowComponent implements OnInit {
  //list: any[];

  public data: Observable<any[]>;
  constructor(private workflowService: WorkflowService) {
  }
  public ngOnInit(): void {
    this.data = this.workflowService.getAll();
      }

  getAll() {
    this.workflowService.getAll().subscribe(
      reponse => {
      let data: any[] = reponse;
       console.log('data is ', data);
       for(let l in data) {
         let list = data[l].name;
         console.log('List est  ', list);
       }
      }
    );
  }
  /*  public  data: Observable<any[]>; */



   /*[
    {
      "name": "Furniture",
       "items": [
                { "text": "Tables & Chairs" },
                { "text": "Sofas" },
                { "text": "Occasional Furniture" }
              ]
    },
    {
      "text": "Decor",
      "items": [
        { "text": "Bed Linen" },
        { "text": "Curtains & Blinds" },
        { "text": "Carpets" }
      ]
    }
  ];*/
}

