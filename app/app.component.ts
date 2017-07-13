// app.component.ts
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from "angular2/http";
import {MovieService} from "./services/movieService";

// Component annotation. Let op de injection van providers: [] en gebruik van styleUrls:[]
@Component({
	selector   : 'movie-app',
	templateUrl: 'app/app.component.html',
	providers  : [MovieService, HTTP_PROVIDERS],
	styleUrls  : ['./app/css/app.component.css']
})

export class AppComponent {
	// Properties voor de component/class, nu geen Model gebruikt.
	movies:Object[];
	currentMovie:Object = null;

	constructor(private movieService:MovieService) {
	}

	// Serie movies zoeken op basis van trefwoord.
	searchMovies(keyword) {
		this.currentMovie = null;
		this.movieService.searchMovies(keyword)
			.subscribe(movieData => {
					this.movies = movieData;				// 1. success handler
				},
				err => console.log(err),						// 2. error handler
				()=> console.log('Getting movies complete...')	// 3. complete handler
			)
	}

	// Details ophalen op basis van movieID
	getMovieDetails(movieID:string) {
		this.movieService.getMovieDetails(movieID)
			.subscribe(
				movie => {
					this.currentMovie = movie;
					console.log(this.currentMovie);
				},
				err => console.log(err),
				()=> console.log('Getting movie with ID ', movieID, ' complete.')
			)
	}

	// alles leegmaken.
	clearMovies() {
		this.movies       = [];
		this.currentMovie = null;
	}
}