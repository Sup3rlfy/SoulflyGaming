import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-sisyphus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sisyphus.component.html',
  styleUrl: './sisyphus.component.scss'
})
export class SisyphusComponent {
 constructor(public langService: LanguageService) {}
}
