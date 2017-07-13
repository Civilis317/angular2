import { Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/Rx';

// Helperfuncties om URL's samen te stellen voor zoeken binnen OMDbAPI
const searchUrl = (keyword) => `http://www.omdbapi.com/?s=${keyword}&apikey=2cf5233`;
const detailUrl = (movieID) => `http://www.omdbapi.com/?i=${movieID}&apikey=2cf5233`;

@Injectable()
export class MovieService {

  constructor(private http: Http) {

  }

  // retourneer alle movies
  searchMovies(keyword) {
    return this.http.get(searchUrl(keyword))
      .map(res => res.json())
      .map(movies => movies.Search); // un-wrap 'Search'-object in return-resultaat.
  }

  // retourneer gegevens van 1 movie op basis van ID
  getMovieDetails(movieID: string) {
    return this.http.get(detailUrl(movieID))
      .map(res => res.json())
  }
}