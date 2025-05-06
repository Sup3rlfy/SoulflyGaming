import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ThemeService } from '../theme.service';

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

  constructor(
    private router: Router,
    public themeService: ThemeService) {}
  
    ngOnInit(): void {
      this.themeService.initTheme(); // ✅ initialize from cookie
  
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd && event.urlAfterRedirects.includes('#')) {
          this.scrollToFragment(event.urlAfterRedirects);
        }
      });
    }

  // Toggle between light and dark modes
  toggleTheme(): void {
    this.themeService.toggleTheme();
    /*
    this.isLightMode = !this.isLightMode;
    if (typeof window !== 'undefined') {
      this.cookieService.set('site-theme', this.isLightMode ? 'light' : 'dark', 365, '/');
    }
    console.log('Cookie set to:', this.cookieService.get('site-theme'));
    this.applyTheme();
    */
  }

  private applyTheme(): void {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(this.isLightMode ? 'light-mode' : 'dark-mode');
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