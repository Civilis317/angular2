/**
 * app.component.ts
 */
import {Component} from 'angular2/core';
import {City} from './model/city.model';
import {CityService} from './services/city.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'hello-world',
  templateUrl: 'app/app.component.html',
  providers: [CityService, HTTP_PROVIDERS]
})

export class AppComponent {
  currentCity: City;
  cityPhoto: string = '';
  toggleMsg: string = 'Hide list of cities';
  title: string = 'Cities by Angular2 Service';
  cities: City[];
  showCities: boolean = true;

  constructor(private cityService: CityService) {
  }

  // lifecycle hook
  ngOnInit() {
    this.cityService.getCities()
      .subscribe(
      cityData => this.cities = cityData,
      err => console.log(err),
      () => console.log('Cities retrieval complete')
      )
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

}
