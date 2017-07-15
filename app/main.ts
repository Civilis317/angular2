import {bootstrap}    from 'angular2/platform/browser'
import {HomeComponent} from "./home.component";
import {ROUTER_PROVIDERS} from "angular2/router";
import {CityService} from "./services/city.service";
import {HTTP_PROVIDERS} from "angular2/http";

// hier nu ook CityService en HTTP_PROVIDERS toegevoegd voor site-wide access
bootstrap(HomeComponent, [CityService, HTTP_PROVIDERS, ROUTER_PROVIDERS]);
