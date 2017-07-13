/**
 * app.component.ts
 */
import {Component} from 'angular2/core';
import {City} from './model/city.model';

@Component({
  selector: 'hello-world',
  template: `
            <h1>{{ title }}</h1>
            <ul class="list-group" *ngIf="showCities">
              <li class="list-group-item" *ngFor="#city of cities">{{city.name}}</li>
            </ul>
            
            <h2 *ngIf="cities.length > 3">That's a lot of cities!</h2>
  
            `
})

export class AppComponent {
  title: string;
  cities: City[];
  showCities: boolean = true;

  constructor() {
    this.title = 'Angular2 application';
    this.cities = [
      new City(1, 'Groningen', 'Groningen'),
      new City(2, 'Hengelo', 'Overijssel'),
      new City(3, 'Den Haag', 'Zuid-Holland'),
      new City(4, 'Enschede', 'Overijssel')
    ];
  }

}
