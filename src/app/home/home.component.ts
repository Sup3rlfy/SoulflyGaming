import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],  // 👈 Add CommonModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projectList = [
    {
      title: 'Sisyphus the Game',
      images: [
        'assets/images/sis_1.jpg',
        'assets/images/sis1.jpg',
        'assets/images/sis2.jpg',
      ],
      link: '/sisyphus',
      description: [
        'A challenging single player experience on Steam.',
        'Jump into the role of Sisyphus and his punishing conquest.'
      ]
    },
    {
      title: 'Runes of Elana',
      images: [
        'assets/images/roe1.jpg',
        'assets/images/roe2.jpg',
        'assets/images/roe_2.jpg',
        'assets/images/roe3.jpg',
        'assets/images/roe_3.jpg',
        'assets/images/roe4.jpg',
        'assets/images/roe_4.jpg',
        'assets/images/roe5.jpg',
        'assets/images/roe_5.jpg',
      ],
      link: '/runes',
      description: [
        'Inspired by ADOM, Final Fantasy, Warframe and a great many other games i set out to create my own game world while also honing my skills in Java and JavaFX.',
        'Check out the state of "Runes of Elana" and what you might expect it to become in the future.'
      ]
    },
    {
      title: 'About Me',
      images: [
        'assets/images/bio.jpg',

      ],
      link: '/bio',
      description: [
        'Discover the journey and name behind Soulfly.',
        'Learn how I got here and what drives me.'
      ]
    }
  ];
  
  imageIndexes: number[] = [];

  ngOnInit() {
    this.imageIndexes = this.projectList.map(() => 0);

    setInterval(() => {
      this.imageIndexes = this.imageIndexes.map((currentIndex, i) => {
        const total = this.projectList[i].images.length;
        return (currentIndex + 1) % total;
      });
    }, 5000); // 5 seconds
  }
}