import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: ` <div class="app">
    <header class="container">
      <img
        class="brand-logo"
        src="/assets/logo.svg"
        alt="logo"
        aria-hidden="true"
      />
    </header>
    <main class="container">
      <app-home></app-home>
    </main>
  </div>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Home App';
}
