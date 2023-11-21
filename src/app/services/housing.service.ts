import { Injectable } from '@angular/core';
import { HousingLocation } from '../@types/housing-location';
import listings from '../data/listings';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = listings;
  constructor() { }

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
}
