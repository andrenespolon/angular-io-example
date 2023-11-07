import { Injectable } from "@angular/core";
import type { HousingLocation } from "src/types/HousingLocation";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  protected url: string = "http://localhost:3000/locations";
  protected housingLocationList: HousingLocation[] = [];

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitApplication(data: {
    firstName: string;
    lastName: string;
    email: string;
  }) {
    console.table(data);
  }
}
