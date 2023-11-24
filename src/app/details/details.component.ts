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
  template: ` <article class="mt-20 h-full flex flex-row-reverse gap-10">
    <div class="w-6/12">
      <img
        [src]="housingLocation?.photo"
        [alt]="housingLocation?.name"
        class="object-contain rounded-lg"
      />
    </div>
    <div class="w-6/12">
      <section>
        <h2 class="text-[48pt] font-bold mb-4">{{ housingLocation?.name }}</h2>
        <p class="text-[24pt] mb-4">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="mb-5 before:bg-[url('/assets/location-pin.svg')]">
        <div class="flex items-center mb-4">
          <img src="/assets/location-pin.svg" />
          <h2 class="text-secondary-color text-[24pt]">
            About this housing location
          </h2>
        </div>
        <ul>
          <li class="text-[14pt]">
            Units available: {{ housingLocation?.availableUnits }}
          </li>
          <li class="text-[14pt]">
            Does this location have wifi: {{ housingLocation?.hasWifi }}
          </li>
          <li class="text-[14pt]">
            Does this location have laundry: {{ housingLocation?.hasLaundary }}
          </li>
        </ul>
      </section>
      <section>
        <h2 class="text-[18pt] mb-4">Apply now to live here</h2>
        <form [formGroup]="applyForm" class="flex flex-col gap-2 my-8">
          <label class="mb-5">
            <span class="text-[12pt] font-bold text-secondary-color mb-2 block"
              >First Name</span
            >
            <input
              type="text"
              formControlName="firstName"
              class="text-[12pt] text-gray-700 w-full px-2.5 py-1.5 border-b border-b-secondary-color focus:outline-none focus:bg-accent-color transition-colors duration-700"
            />
          </label>
          <label class="mb-5">
            <span class="text-[12pt] font-bold text-secondary-color mb-2 block"
              >Last Name</span
            >
            <input
              type="text"
              formControlName="lastName"
              class="text-[12pt] text-gray-700 w-full px-2.5 py-1.5 border-b border-b-secondary-color focus:outline-none focus:bg-accent-color transition-colors duration-700"
            />
          </label>
          <label class="mb-5">
            <span class="text-[12pt] font-bold text-secondary-color mb-2 block"
              >Email</span
            >
            <input
              type="text"
              formControlName="email"
              class="text-[12pt] text-gray-700 w-full px-2.5 py-1.5 border-b border-b-secondary-color focus:outline-none focus:bg-accent-color transition-colors duration-700"
            />
          </label>
          <button class="primary" type="submit">Apply now</button>
        </form>
      </section>
    </div>
  </article>`,
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
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((housingLocation) => (this.housingLocation = housingLocation));
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
