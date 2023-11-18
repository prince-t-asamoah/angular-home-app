import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button type="button" class="primary">Search</button>
      </form>
    </section>
    <section>
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
