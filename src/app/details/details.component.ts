import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { HousingService } from './../services/housing.service';
import { HousingLocation } from '../@types/housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: ` <article class="listing">
    <div class="listing-photo">
      <img [src]="housingLocation?.photo" [alt]="housingLocation?.name" />
    </div>
    <div class="listing-info">
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.hasWifi }}</li>
          <li>
            Does this location have laundry: {{ housingLocation?.hasLaundary }}
          </li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm">
          <label for="first-name">First Name</label>
          <input type="text" formControlName="firstName" id="first-name" />
          <label for="last-name">Last Name</label>
          <input type="text" formControlName="lastName" id="last-name" />
          <label for="email">Email</label>
          <input type="text" formControlName="email" id="email" />
          <button class="primary" type="submit">Apply now</button>
        </form>
      </section>
    </div>
  </article>`,
  styleUrl: './details.component.css',
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
 
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}
