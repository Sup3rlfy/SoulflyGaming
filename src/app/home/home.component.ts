import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../language.service';

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
       title: { en: 'Sisyphus the Game', de: 'Sisyphus the Game' },
      images: [
        'assets/images/sis/sis1.jpg',
        'assets/images/sis/sis2.jpg',
        'assets/images/sis/sis3.jpg',
      ],
      link: '/sisyphus',
      description: {
        en: [
          'A challenging single player experience on Steam.',
          'Jump into the role of Sisyphus and his punishing conquest.'
        ],
        de: [
          'Ein herausforderndes Einzelspieler-Erlebnis auf Steam.',
          'Schlüpfe in die Rolle des Sisyphus und bändige seine Strafe.'
        ]
      }
    },
    {
      title: { en: 'Runes of Elana', de: 'Runes of Elana' },
      images: [
        'assets/images/roe/roe1.jpg',
        'assets/images/roe/roe2.jpg',
        'assets/images/roe/roe_2.jpg',
        'assets/images/roe/roe3.jpg',
        'assets/images/roe/roe_3.jpg',
        'assets/images/roe/roe4.jpg',
        'assets/images/roe/roe_4.jpg',
        'assets/images/roe/roe5.jpg',
        'assets/images/roe/roe_5.jpg',
        'assets/images/roe/wallet.jpg',
        'assets/images/roe/mount.jpg',
        'assets/images/roe/stonecircle.jpg',
      ],
      link: '/runes',
      description: {
        en: [
          'Inspired by ADOM, Final Fantasy, Warframe and many more.',
          'Explore with me my vision of a rich fantasy world and a game in development set in it!'
        ],
        de: [
          'Inspiriert von ADOM, Final Fantasy, Warframe uvm.',
          'Ein Blick auf meine Vision einer Fantasy-Welt und die Entwicklung eines Spieles in selbiger.'
        ]
      }
    },
    {
      title: { en: 'About Me', de: 'Über mich' },
      images: [
        'assets/images/bio.jpg',
        'assets/images/bio/Me5.jpg',
        'assets/images/bio/Me1.jpg',

      ],
      link: '/bio',
      description: {
        en: [
          'Discover the journey and name behind Soulfly.',
          'Learn how I got here and what drives me.'
        ],
        de: [
          'Erfahre mehr über den Weg und die Person hinter Soulfly.',
          'Was mich antreibt und wie ich bis hierher gekommen bin.'
        ]
      }
    },
    {
      title: { en: 'Plot for Rent in Marchtrenk!', de: 'Grundstück Marchtrenk zu vermieten!' },
      images: [
        'assets/images/marchtrenk/marchtrenk.jpg',
        'assets/images/marchtrenk/marchtrenk3.jpg',
        'assets/images/marchtrenk/marchtrenk2.jpg',
        'assets/images/marchtrenk/marchtrenk4.jpg',
        'assets/images/marchtrenk/marchtrenk5.jpg',
        'assets/images/marchtrenk/marchtrenk6.jpg',

      ],
      link: '/marchtrenk',
      description: {
        en: [
          '- 4157m² available end of year',
          '- Marchtrenk, less than 1 minute to train station',
          '- For rent or long-term lease'
        ],
        de: [
          '- 4157m² ab Jahresende verfügbar',
          '- Marchtrenk, weniger als 1 Minute zum Bahnhof',
          '- Vermietung oder Langzeit-Pacht'
        ]
      }
    }
  ];

  imageIndexes: number[] = [];

  constructor(public langService: LanguageService) {} 

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