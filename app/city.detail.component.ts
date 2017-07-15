// city.detail.component.ts
import { Component } from 'angular2/core';
import {RouteParams} from "angular2/router";

@Component({
	selector: 'city-detail-component',
	template: `
	<h1>City Details</h1>
	<h2>Details voor stad: {{ name }} (met id: {{id}})</h2>`
})

export class CityDetailComponent {
	id:number   = 0;
	name:string = 'onbekend';

	constructor(private routeParams:RouteParams) {

	}

	ngOnInit() {
		this.name = this.routeParams.get('name');
		this.id   = parseInt(this.routeParams.get('id'));
	}

}
