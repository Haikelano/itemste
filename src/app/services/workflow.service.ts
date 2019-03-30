import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  ApiUrl = "http://localhost:8080/";
  TREE_DATA: any = [];
  constructor(private http: HttpClient) {}


  public extraData(res: Response) {
    let body = res.json();
    return body;
}
  getAll() {
    return this.http.get(this.ApiUrl + 'workflow');
  }
  getList() {
    this.getAll().subscribe(
      reponse => {
       this.TREE_DATA = reponse;
        console.log('Appel methode getList + show this', this.TREE_DATA);
      }
    );
  }
}
