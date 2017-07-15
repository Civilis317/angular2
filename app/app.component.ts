// app.component.ts
import {Component} from 'angular2/core';
import {City} from "./model/city.model";
import {CityService} from './services/city.service';
import {HTTP_PROVIDERS} from "angular2/http";
import {CityDetail} from "./city.detail"; // Detail Component importeren
import {CityOrders} from "./city.orders";
import 'rxjs/Rx';
import {OrderService} from "./services/order.service";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.component.html',
	providers  : [CityService, HTTP_PROVIDERS, OrderService],
	directives : [CityDetail, CityOrders, ROUTER_DIRECTIVES]
})

export class AppComponent {
	title:string  = 'Steden met routing';
	cities:City[] = [];
	currentCity:City;

	constructor(private cityService:CityService) {
	}

	ngOnInit() {
		this.cityService.getCities()
			.subscribe(
				cityData => this.cities = cityData,
				err => console.log(err),
				() => console.log('Steden ophalen compleet.')
			)
	}

	showCity(city:City) {
		this.currentCity = city;
	}

	clearCity() {
		this.currentCity = null;
	}

	updateCityRating(rating) {
		this.currentCity.rating += rating;
	}
}