import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "src/services/housing.service";

import type { HousingLocation } from "src/types/HousingLocation";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ["./details.component.css"],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" />
      <section>
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Units available: {{ housingLocation?.wifi }}</li>
          <li>Units available: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading"></h2>
        <form [formGroup]="applyForm" (submit)="submitApply()">
          <label for="first-name">First name</label>
          <input type="text" id="first-name" formControlName="firstName" />

          <label for="last-name">Last name</label>
          <input type="text" id="last-name" formControlName="lastName" />

          <label for="email">Email</label>
          <input type="text" id="email" formControlName="email" />

          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
})
export class DetailsComponent {
  /**
   * `ActivatedRoute` is used to get the props of route, such as params, url etc.
   */
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm: FormGroup = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  constructor() {
    /**
     * The `housingLocationId` must be a number type to pass to method
     * `getHousingLocationById`;
     */
    const housingLocationId = Number(
      this.route.snapshot.params["id"]
    ) as number;
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((data) => (this.housingLocation = data));
  }

  /**
   * Submit apply
   */
  submitApply() {
    this.housingService.submitApplication(this.applyForm.value);
  }
}
