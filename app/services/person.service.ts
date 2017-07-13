/**
 * New typescript file
 */
import {Injectable} from 'angular2/core';
import {Person} from '../model/person.model';
import {Http} from 'angular2/http';
//import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

const makeUrl = (numRows) => `http://www.filltext.com/?rows=${numRows}&id={index}&email={email}&lname={lastName}&fname={firstName}`;

@Injectable()
export class PersonService {

  constructor(private http: Http) {

  }

  // get person data from FillText.com
  getPersons(numRows) {
    let url = makeUrl(numRows);
    console.log(url)

    return this.http.get(url).map(res => <Person[]>res.json());
  }

}