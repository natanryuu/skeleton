import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSkeletonLoaderModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  isLoading = true;
  classAttributeWithBooleanFalseValue = false; // Define this property

  constructor() {
    // Simulate loading content with a timeout
    setTimeout(() => {
      this.isLoading = false; // Simulate loading complete
    }, 2000); // Adjust the time as needed
  }
}
