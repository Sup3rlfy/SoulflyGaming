import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  isLightMode = true;


  toggleTheme(): void {
    this.isLightMode = !this.isLightMode;
    document.body.classList.toggle('light-mode', this.isLightMode);
  }

}