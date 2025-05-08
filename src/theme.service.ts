// theme.service.ts
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private cookieKey = 'site-theme';
  constructor(private cookieService: CookieService) {}


  setTheme(theme: 'light' | 'dark') {
    // Remove both light and dark theme classes
    document.body.classList.remove('light', 'dark');
    
    // Add the correct theme class (light or dark)
    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.add('dark');
    }

    // Save the theme preference in a cookie for persistence
    this.cookieService.set(this.cookieKey, theme, 365); // expires in 1 year
  }

  initTheme() {
    const saved = this.cookieService.get(this.cookieKey);
    // Default to 'dark' if no theme is found in the cookie
    //const theme = saved === 'light' ? 'light' : 'dark';

    //initializes with previously saved cookies
    let theme: 'light' | 'dark';
    if (saved === 'light' || saved === 'dark') {
      theme = saved;
    } else {
    // Use system preference if no cookie is set
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
    }
    this.setTheme(theme);
  }

  toggleTheme() {
    // Toggle between 'light' and 'dark' theme
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}