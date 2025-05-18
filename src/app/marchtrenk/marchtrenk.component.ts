import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { LanguageService } from '../../language.service';
declare var adsbygoogle: any;

@Component({
  selector: 'app-marchtrenk',
  standalone: true,
  templateUrl: './marchtrenk.component.html',
  imports: [NgFor, NgIf],
  styleUrls: ['./marchtrenk.component.scss']
})
export class MarchtrenkComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/images/marchtrenk/marchtrenk.jpg',
    'assets/images/marchtrenk/marchtrenk2.jpg',
    'assets/images/marchtrenk/marchtrenk3.jpg',
    'assets/images/marchtrenk/marchtrenk4.jpg',
    'assets/images/marchtrenk/marchtrenk5.jpg',
    'assets/images/marchtrenk/marchtrenk6.jpg'
  ];

  currentImageIndex = 0;
  intervalId: any;
  isSlideshowRunning = true;
  isImageFullScreenOpen = false;
  

  @ViewChild('thumbnailContainer', { static: false }) thumbnailContainer!: ElementRef<HTMLDivElement>;
  constructor(public langService: LanguageService) {}

  ngOnInit(): void {
    this.startSlideshow();
  }

  startSlideshow(): void {
    this.isSlideshowRunning = true;
    this.continueSlideshow();
  }

  continueSlideshow(): void {
    if (this.isImageFullScreenOpen == false && this.isSlideshowRunning) {
      this.intervalId = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }, 5000);
    } else {
      clearInterval(this.intervalId);
    }
  }

  stopSlideshow(): void {
    clearInterval(this.intervalId);
    this.isSlideshowRunning = false;
  }

  toggleSlideshow(event: MouseEvent): void {
    event.stopPropagation(); // prevent lightbox opening
    this.isSlideshowRunning ? this.stopSlideshow() : this.startSlideshow();
  }
  prevImage(event?: MouseEvent): void {
    if (event) event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(event?: MouseEvent): void {
    if (event) event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  scrollThumbnails(direction: 'left' | 'right'): void {
    const container = this.thumbnailContainer.nativeElement;
    const scrollAmount = 150;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  }

  openImageFullScreen(): void {
    this.isImageFullScreenOpen = true;
    
    clearInterval(this.intervalId);
  }
  
  closeImageFullScreen(): void {
    this.isImageFullScreenOpen = false;
    this.startSlideshow();
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  ngAfterViewInit(): void {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      console.error('AdSense error', e);
    }
  }
}