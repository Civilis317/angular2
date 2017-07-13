/**
 * main.ts
 * bootstrap the app
 */
import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {CityService} from './services/city.service';

bootstrap(AppComponent, [CityService]);

