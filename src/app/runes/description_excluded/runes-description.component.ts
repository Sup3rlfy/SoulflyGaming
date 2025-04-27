import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'runes-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './runes-description.component.html',
  styleUrls: ['./runes-description.component.scss'],
})
export class RunesDescriptionComponent {
  @Input() content: string = '';
  showFullDescription = false;

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }

  get firstTenLines() {
    const lines = this.content.split('\n');
    return lines.slice(0, 10).join('\n');
  }
}