import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import type { HousingLocation } from "src/types/HousingLocation";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ["./housing-location.component.css"],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <h2 class="listing-heading">
        {{ housingLocation.name }}
      </h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
      <!-- 
        This is the routerLink directive, wich provide a router link 
        component to navigate between pages inside application.
       -->
      <a [routerLink]="['/details', housingLocation.id]">Learn more</a>
    </section>
  `,
})
export class HousingLocationComponent {
  /**
   * This is the prop received in the component.
   */
  @Input()
  housingLocation!: HousingLocation;
}
