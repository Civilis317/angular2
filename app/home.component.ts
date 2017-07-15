// home.component.ts - applicatie met routing
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {AppComponent} from "./app.component";
import {CityAddComponent} from "./city.add";
import {CityDetailComponent} from "./city.detail.component";

@Component({
	selector  : 'home-component',
	template  : `
		<h1>Stedentripjes - gezellig en goedkoop</h1>
		  <a [routerLink]="['Home']" class="btn btn-primary">Overzicht</a>
		  <a [routerLink]="['Add']" class="btn btn-primary">Stad toevoegen</a>
		  <hr>
		  <!-- Hier dynamisch componenten tonen -->
		  <router-outlet></router-outlet>
		  <!-- hieronder eventueel footer, disclaimer, enzovoort -->
		  `,
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path: '/', name: 'root', redirectTo: ['Home']},
	{path: '/home', name: 'Home', component: AppComponent},
	{path: '/add', name: 'Add', component: CityAddComponent},
	{path: '/detail/:name/:id', name: 'Detail', component: CityDetailComponent}
])

export class HomeComponent {

}
