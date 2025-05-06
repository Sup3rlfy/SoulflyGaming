import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-marchtrenk',
  standalone: true,
  templateUrl: './marchtrenk.component.html',
  styleUrls: ['./marchtrenk.component.scss']
})
export class MarchtrenkComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/marchtrenk1.jpg',
    'assets/images/marchtrenk2.jpg',
    'assets/images/marchtrenk3.jpg',
    'assets/images/marchtrenk4.jpg',
    'assets/images/marchtrenk5.jpg'
  ];

  currentImageIndex = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000); // change every 5 seconds
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}