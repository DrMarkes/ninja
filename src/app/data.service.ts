import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(): Observable<Object[]> {
    return this.http.get('https://ninjas-angular.firebaseio.com/.json')
      .map(
        res => res.json()
      );
  }

}
