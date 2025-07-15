import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { ThemeService } from '../../theme.service';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  isLightMode = false;
  
  constructor(
    private router: Router,
    public themeService: ThemeService,
    public langService: LanguageService
    ) {}
  
    ngOnInit(): void {
      this.themeService.initTheme(); // ✅ initialize from cookie
      this.langService.initLanguage();
  
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd && event.urlAfterRedirects.includes('#')) {
          this.scrollToFragment(event.urlAfterRedirects);
        }
      });
    }

    
  // Toggle between light and dark modes
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
  toggleLanguage(): void {
    this.langService.toggleLanguage();
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
  goToRunes(): void {
  this.router.navigate(['/runes'], { fragment: undefined });
}
}