// city.service.ts
import { Injectable} from 'angular2/core';
import {City} from '../model/city.model'
import {Http, Response} from "angular2/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CityService {
	cityCache:City[] = []; // handmatige 'cache' voor cities
	constructor(private http:Http) {

	}

	// getCities, met expliciete mapping al hier in de service.
	getCities() {
		return this.http.get('app/cities.json')
			.map(res => <City[]> res.json());
	}


	// Setter en Getter voor handmatige cache
	setCityCache(cities:City[]):void {
		this.cityCache = cities;
	}

	getCityCache():City[] {
		return this.cityCache;
	}

	addCityToCache(newCity:City):void {
		this.cityCache.push(newCity);
		// TODO: synchroniseren met backend. Nu wordt nieuwe city alleen toegevoegd
		// aan lokale cache.
	}
}