import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent implements OnInit {
  images = [
    'assets/images/bio/Me1.jpg',
    'assets/images/bio/Me2.jpg',
    'assets/images/bio/Me3.jpg',
    'assets/images/bio/Me4.jpg',
    'assets/images/bio/Me5.jpg',
    'assets/images/bio/Me6.jpg',
  ];

  currentImage = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    }, 7000); // every 5 seconds
  }
}