/**
 * app.component.ts
 */
import {Component} from 'angular2/core';
import {City} from './model/city.model';

@Component({
  selector: 'hello-world',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  txtNewCity: string;
  currentCity: City;
  cityPhoto: string = '';
  txtVisible: boolean = true;
  newCity: string = '';
  toggleMsg: string = 'Hide list of cities';
  title: string;
  cities: City[];
  showCities: boolean = true;

  toggleCities() {
    this.showCities = !this.showCities;
    this.showCities
      ? this.toggleMsg = 'Hide list of cities'
      : this.toggleMsg = 'Show list of cities';
  }

  cityDetail(city: City) {
    this.currentCity = city;
    this.cityPhoto = `img/${this.currentCity.name}.jpg`;
  }

  changeCity(value: string) {
    this.newCity = value;
  }

  addCity(value: string) {
    let newCity = new City(
      this.cities.length + 1,   // id 
      value,                    // name
      'Unknown'                 // province
    );
    this.cities.push(newCity);
  }

  toggleText() {
    this.txtVisible = !this.txtVisible;
  }

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
