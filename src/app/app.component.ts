import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component';

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
export class AppComponent {
  title = 'RoE Home';
  
  isLightMode = false;

  toggleTheme(): void {
    this.isLightMode = !this.isLightMode;
    document.body.classList.toggle('light-mode', this.isLightMode);
  }
}