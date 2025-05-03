import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RunesComponent } from './runes/runes.component';  // Import your component
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { SisyphusComponent } from './sisyphus/sisyphus.component';  // Import your component
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TopNavComponent
  ],
  template: `
    <app-top-nav></app-top-nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Soulfly Gaming';
  isLightMode = false;

  constructor(private router: Router) {}

  // Toggle between light and dark modes
  toggleTheme(): void {
    this.isLightMode = !this.isLightMode;
    if (this.isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    console.log('isLightMode:', this.isLightMode, 'classList:', document.body.classList.value);
  }

  ngOnInit() {
    // Listen for route changes to scroll to fragments
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the URL contains a fragment (i.e., #id)
        if (event.urlAfterRedirects.includes('#')) {
          // Scroll to the fragment
          this.scrollToFragment(event.urlAfterRedirects);
        }
      }
    });
  }

  // Function to scroll to the fragment
  private scrollToFragment(url: string) {
    const fragment = url.split('#')[1];
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}