/**
 * city service
 */

import {Injectable} from 'angular2/core';
import {City} from '../model/city.model';

@Injectable()
export class CityService {
  private cities: City[] = [
    new City(1, 'Groningen', 'Groningen'),
    new City(2, 'Hengelo', 'Overijssel'),
    new City(3, 'Den Haag', 'Zuid-Holland'),
    new City(4, 'Enschede', 'Overijssel'),
    new City(5, 'Amsterdam', 'Noord-Holland')
  ];

  // function to return all cities...
  getCities(): City[] {
    return this.cities;
  }

  // rturn specific city...
  getCity(id: number): City {
    // [0], because .filter() returns an array (in this case of 1 element)
    return this.cities.filter(c => c.id === id)[0];
  }

  // add city to the array
  addCity(cityName: string) {
    let newCity = new City(
      this.cities.length + 1,
      cityName,
      'Unknown'  // TODO: implement province
    );
    this.cities.push(newCity);
  }



}