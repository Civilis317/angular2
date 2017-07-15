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
import {FilterPipe} from './pipes/filter.pipe';

@Component({
	selector   : 'hello-world',
	templateUrl: 'app/app.component.html',
	providers  : [OrderService],
	directives : [CityDetail, CityOrders, ROUTER_DIRECTIVES],
	pipes      : [FilterPipe]// pipe gebruiken voor component
})

export class AppComponent {
	title:string      = 'Stad toevoegen via formulier';
	cities:City[]     = [];
	currentCity:City;
	filterCity:string = '';

	constructor(private cityService:CityService) {
	}

	ngOnInit() {
		// Uitgebreid voor werken met cache van cities in de service
		if (this.cityService.getCityCache().length === 0) {
			this.cityService.getCities()
				.subscribe(
					(cityData) => {
						this.cities = cityData;
						this.cityService.setCityCache(this.cities);
					},
					err => console.log(err),
					() => console.log('Steden ophalen compleet.')
				)
		} else {
			// Er zijn al steden in de cache. Haal deze op.
			console.log('Steden opgehaald uit cache - geen HTTP-request');
			this.cities = this.cityService.getCityCache();
		}
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