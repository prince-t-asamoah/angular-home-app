import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      Details Page
    </p>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
