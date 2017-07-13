/**
 * city service
 */

import {Injectable} from 'angular2/core';
import {City} from '../model/city.model';
import {Http} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'; // for functions such as .map, .skip etc

@Injectable()
export class CityService {

  constructor(private http: Http) {

  }

  // function to return all cities...
  getCities() {
    return this.http.get('app/cities.json').map(res => <City[]>res.json());
  }

}