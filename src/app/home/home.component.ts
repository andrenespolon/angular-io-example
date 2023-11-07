import { Component, Input, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";

import type { HousingLocation } from "src/types/HousingLocation";
import { HousingService } from "src/services/housing.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  styleUrls: ["./home.component.css"],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <!-- 
        ngFor directive is used in loops, e.g. arrays
       -->
      <app-housing-location
        *ngFor="let housingLocation of filteredHousingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
})
export class HomeComponent {
  /**
   * This is the props received in this component.
   */
  @Input()
  /**
   * By default, it is a empty list of HousingLocation.
   */
  housingLocationList: HousingLocation[] = [];
  /**
   * This is a services consuming by home page to get all housing
   * locations in housing services.
   *
   * We use `inject` to provide a dependency injection. Benefits of
   * dependency injection:
   * - Testabe code;
   * - Reusable code;
   * - Maintainable code;
   */
  housingService: HousingService = inject(HousingService);
  filteredHousingLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((data) => {
      this.housingLocationList = data;
      this.filteredHousingLocationList = data;
    });
  }

  filterResults(text: string): void {
    if (!text) this.filteredHousingLocationList = this.housingLocationList;

    this.filteredHousingLocationList = this.housingLocationList.filter((ele) =>
      ele?.city.toLocaleLowerCase().includes(text.toLowerCase())
    );
  }
}
