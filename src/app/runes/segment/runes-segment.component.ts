import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'runes-segment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './runes-segment.component.html',
  styleUrls: ['./runes-segment.component.scss']
})
export class RunesSegmentComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() content: SafeHtml[] = [];  // <-- changed from string to string[]
  @Input() id!: string;
  @Input() isEmpty: boolean = false;
}