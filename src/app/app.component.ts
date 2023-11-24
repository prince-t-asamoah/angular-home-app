import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  template: ` <div class="min-h-screen">
    <header class="px-10 py-5 sticky top-0 bg-white shadow-md">
      <a routerLink="/" title="Home">
        <img src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </a>
    </header>
    <main class="px-10">
      <router-outlet></router-outlet>
    </main>
  </div>`,
})
export class AppComponent {
  title = 'Home App';
}
