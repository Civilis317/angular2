/**
 * app.component.ts
 */
import {Component} from 'angular2/core';
import {City} from './model/city.model';
import {CityService} from './services/city.service';

@Component({
  selector: 'hello-world',
  templateUrl: 'app/app.component.html',
  // providers: [CityService] // this has moved to the bootstrapper main.ts, to have a single instance of the service for all components
})

export class AppComponent {
  currentCity: City;
  cityPhoto: string = '';
  toggleMsg: string = 'Hide list of cities';
  title: string;
  cities: City[];
  showCities: boolean = true;

  constructor(private cityService: CityService) {
    this.title = 'Cities by Angular2 Service';

  }

  // lifecycle hook
  ngOnInit() {
    this.cities = this.cityService.getCities();
  }

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

  addCity(value: string) {
    this.cityService.addCity(value);
  }

}
