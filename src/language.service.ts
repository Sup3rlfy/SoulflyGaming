// language.service.ts
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLang: 'en' | 'de' = 'en';
  private langCookieKey = 'site-lang';

  constructor(private cookieService: CookieService) {}

  initLanguage() {
    const savedLang = this.cookieService.get(this.langCookieKey);
    if (savedLang === 'en' || savedLang === 'de') {
      this.currentLang = savedLang;
    } else {
      const browserLang = navigator.language.startsWith('de') ? 'de' : 'en';
      this.currentLang = browserLang;
      this.cookieService.set(this.langCookieKey, this.currentLang, 365);
    }
  }

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
    this.cookieService.set(this.langCookieKey, this.currentLang, 365);
  }

  get lang(): 'en' | 'de' {
    return this.currentLang;
  }

  setLanguage(lang: 'en' | 'de') {
    this.currentLang = lang;
    this.cookieService.set(this.langCookieKey, lang, 365);
  }
}