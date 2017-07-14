// app.component.ts
import {Component} from 'angular2/core';
import {City} from "./model/city.model";
import {CityDetail} from "./city.detail"; // Detail Component importeren
import {CityService} from './services/city.service';
import {HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/Rx';


@Component({
  selector: 'hello-world',
  templateUrl: 'app/app.component.html',
  providers: [CityService, HTTP_PROVIDERS],
  directives: [CityDetail]	// niet vergeten: invoegen bij directives!
})

export class AppComponent {
  title: string = 'Steden met detailcomponent';
  cities: City[] = [];
  cityPhoto: string = '';
  currentCity: City;

  constructor(private cityService: CityService) {
  }

  ngOnInit() {
    this.cityService.getCities()
      .subscribe(
      cityData => this.cities = cityData,
      err => console.log(err),
      () => console.log('Steden ophalen compleet.')
      )
  }

  showCity(city: City) {
    this.currentCity = city;
    console.log(city.name)
    this.cityPhoto = `../img/${this.currentCity.name}.jpg`;
    console.log('photo:' + this.cityPhoto)
  }

  clearCity() {
    console.log('clearCity!!!')
    this.currentCity = null;
  }

  updateCityRating(rating) {
    this.currentCity.rating += rating;
  }


}