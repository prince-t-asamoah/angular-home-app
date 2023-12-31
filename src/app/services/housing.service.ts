import { Injectable } from '@angular/core';
import { HousingLocation } from '../@types/housing-location';
import listings from '../data/listings';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = listings;
  url = 'http://localhost:3000/locations';

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    return this.housingLocationList;
    // const data = await fetch(this.url);
    // return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {

    return this.housingLocationList.find(housing => housing.id === id);
    // const data = await fetch(`${this.url}/${id}`);
    // return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
