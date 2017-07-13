// app.component.ts
import {Component} from 'angular2/core';
import {Person} from "./model/person.model";
import {PersonService} from './services/person.service';
import {HTTP_PROVIDERS} from "angular2/http";


@Component({
  selector: 'person-app',
  templateUrl: 'app/app.component.html',
  providers: [PersonService, HTTP_PROVIDERS]
})

export class AppComponent {
  title: string = 'Dummy data via Filltext.com';
  people: Person[] = [];
  numRows: number[] = [5, 10, 15];
  selectedRows: number = 5; // default 5

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.personService.getPersons(this.selectedRows)
      .subscribe(
      personData => this.people = personData,
      err => console.log(err),
      () => console.log('Personen ophalen compleet.')
      )
  }

  emptyTable() {
    this.people = [];
  }
}