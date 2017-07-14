/**
 * order.model.ts
 * represents a booking for a trip to a city
 */
import {City} from './city.model';

export class CityOrderModel {
  constructor(
    public city: City,
    public numBookings: number = 1
  ) { }

}
