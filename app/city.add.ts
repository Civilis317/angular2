// city.add.ts - nieuwe stad toevoegen aan array met steden
import {Component} from 'angular2/core';
import {City} from "./model/city.model";
import {CityService} from "./services/city.service";

@Component({
	selector   : 'city-add',
	templateUrl: 'app/city.add.html'
})

export class CityAddComponent {
	city:City          = new City();
	provinces:string[] = ['Groningen', 'Friesland', 'Drenthe', 'Overijssel', 'Flevoland', 'Gelderland', 'Noord-Holland', 'Zuid-Holland', 'Utrecht', 'Noord-Brabant', 'Zeeland', 'Limburg'];
	cityAdded:string[] = [];


	constructor(private cityService:CityService) {

	}

	onSubmit() {
		console.log('City toevoegen : ', this.city);
		this.city.id = this.cityService.getCityCache().length + 1; // nieuwe id berekenen
		this.cityService.addCityToCache(this.city); // toevoegen via service
		this.cityAdded.push(this.city.name); // lokale loggin
		this.city = new City(); // reset voor volgende invoer.
	}
}