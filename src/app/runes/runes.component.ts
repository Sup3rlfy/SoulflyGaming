import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../safe.pipe';
import { RunesSegmentComponent } from './segment/runes-segment.component';

@Component({
  selector: 'app-runes',
  standalone: true,
  imports: [
    CommonModule,
    SafePipe,
    RunesSegmentComponent
  ],
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent {
  // This will hold the content for the description section
 
  segmentList = [
    {
      id: 'gameDesc',
      title: 'Game Description',
      image: 'assets/images/roe1.jpg',
      content: `- High fantasy RPG with minimal steampunk elements as inspired by ADOM, Final Fantasy XI online and World of Warcraft
                - Set in an engaging world with lots of lore, deep background and story
                - Traditional races such as Humans, Dwarves and Elves and new races such as the Irai
                - planned for more than 20 classes (such as Paladin, Druid, Thief, Assassin, Ranger...)
                - Breeding System for mounts
                - Gathering and Crafting System for just about everything
                - Detailed skill leveling system
                - rune system (inspired by Warhammer 40k, Warfram and FFXI)
                - currency system with multiple currencies and interchange rates as well as bank accounting system`
    },
    {
      id: 'vision',
      title: 'The Vision',
      image: 'assets/images/roe1.jpg',
      content: `Ever since my misspent youth in Final Fantasy IX online and untold other games the idea to build my own world and game around it started to form. 
                  The long term goal is to make a good high fantasy MMORPG, set in a world of humans, elves, dwarves, Irai and a few other races as well as hordes 
                  of monsters as well as the occasional dragon. Since I am still aquireing the skills for such a project, Runes of Elana is going to be a single player 
                  precursor to that massive endeavor, hopefully containing many of the features to come in the massive multiplayer version.`
    },
    {
      id: 'curr',
      title: 'Current Features',
      image: 'assets/images/roe2.jpg',
      content: `Players can have a main class...`
    },
    {
      id: 'class-system',
      title: 'Class System',
      image: 'assets/images/roe2.jpg',
      content: `Players can have a main class...`
    },
    {
      id: 'plan',
      title: 'Planned Features',
      image: 'assets/images/roe2.jpg',
      content: `Players can have a main class...`
    },
    {
      id: 'class-system',
      title: 'Class System',
      image: 'assets/images/roe2.jpg',
      content: `Players can have a main class...`
    },
    {
      id: 'class-system',
      title: 'Class System',
      image: 'assets/images/roe2.jpg',
      content: `Players can have a main class...`
    },
    {
      id: 'future',
      title: 'MMORPG plans',
      image: 'assets/images/roe2.jpg',
      content: `The long term goal is to make a good high fantasy MMORPG, set in a world of humans, elves, dwarves, Irai and a few other races as well as hordes 
    of monsters as well as the occasional dragon.`
    },
    // ... more segments
  ];
  videoList = [
    {
      url: 'https://www.youtube.com/embed/KkL5_84KGeM',
      title: 'approx. Day 120',
      description: ["Early in 2025, I finally got to a major issue I had been avoiding for some time: switching from a 'player moving over the map' kind of display to a 'map is moving and player is fixed in the center' display. This still remains buggy, as some of the optimizations for visual updates could not be ported and still have to be rethought and redone at a later point. Still, a lot of other content was added as well: the sound system was advanced to play sounds. Mining and digging holes works now, there is a working item description, a comparison menu between equipped and not equipped items, and the whole equipment, wallet, and tool menus are new. The time display was perfected. There are separate equipment screens for males and females, and other sexes may still be added. A highlight, I think, is my tool system, where every tool may be used for a multitude of tasks. Who says a pickaxe can only hack into walls and rock!? Want to use it as a hatchet to hack down trees? No problem. Or why should you not be able to use a shovel as a sickle to cut down grass or herbs? Money will go directly to your wallet if one is equipped and you have enough space in it. Consumables like potions, food, and scrolls were added. All the visual menus got (double)click-interactivity and a context menu with choices. A new castle zone was added. A hunger meter was added to the HP display."],
      sdescription: [
        '- display changed from fixed map to fixed player (buggy & slow atm)' ,
        '- Digging and Mining introduced' ,
        '- new visual displays for equipment, tools, wallet and item description' ,
        '- tool system allows for tools to be used for differnet tasks (pickaxe may also chop trees etc.)' ,
        '- working equipment display and backend with display options for different sexes' ,
        '- sound system now plays sounds (doors, (un-)equip, pick-up, drop, use item/tool)' ,
        '- ingame time display improvements' ,
        '- added hunger meter (usage remains to be seen)',
        '- introduced consumables such as potions, food and scrolls',
        '- added castle zones as town-portal target',
        '- context menu opens on item right-click',
        '- default action triggers on item double click (equip/unequip etc.)'
      ],
      showShort: false
    
    },
    {
      url: 'https://www.youtube.com/embed/FXta_dXG0II',
      title: 'approx. Day 100',
      description: ['After a longer break i got down to starting on a user interface for the inventory and similar displays. The visual inventory got methods to sort, move and resize the inventory and display its total weight. A lot of items got added and filled with values. Item description popup windows were still in the making at that point. A switch from utf-8 to unicode symbols was made. Sadly how to use emojis still eludes me to this day. As a fun part to reward myself I introduced a portal spell that would connect two spots over the same map. I also created a globe display for hp and mp as well as two types of bar displays for xp and whatever else might follow. In the top right corner you will also notice the rudimentary beginnings of an ingame time display.'],
      sdescription: [
        '- visual Inventory added with movement, sorting & resizing',
        '- top and bot menus deemed unnecessary for the time being',
        '- added bunch of items',
        '- added visual display for items',
        "- switched utf-8 to unicode. sadly emojis won't work",
        '- item description window started',
        '- reworked map-connections to allow for portals',
        '- added globe displays for hp/mp and bar displays for xp',
        '- started on ingame time display (right top)'
      ],
      showShort: false
    
      },
    {
      url: 'https://www.youtube.com/embed/iEfeIdoi7F0',
      title: 'approx. Day 40',
      description: ['About a month later I had the vision fixed so it would not show anything past non-transparent tiles. There is still a small issue with corner tiles flickering. The top display now had the ability to display messages. Item pickup got its own nice and stylish loot-menu box. A lot of preliminary work was done for harvesting and minin: Dungeons got different rock types and colors and pickaxes were introduces as first tools. I also implemented some convenience methods for debugging, like random and targeted teleportation and a full display of the map. Outside zones with trees grass and rivers were added to the overworld.'],
        sdescription: [
          '- fixed vision range checks for display' ,
          '- top menu now takes and displays messages',
          '- pop-up menu for picking up individual items',
          '- method for pickup-all from same floor tile',
          '- backend preparations for mining and harvesting:',
          '-- added pickaxes, colors and ore content for rock',
          '- new Outside maps for Overworld (trees, grass, rivers)',
          '- added conveniece methods like teleport and show full map',
        ],
        showShort: false
      
      },
    {
      url: 'https://www.youtube.com/embed/V3eLi3ytSy8',
      title: 'Day 17',
      description: ['By day 17 i had my sound player set so it would play some background music depending on the area. The transitions were still a bit abrupt at that point. I built the basics for and item and inventory system and the pick-up method, even though displaying the inventory was still limited to console.'],
      sdescription: [
        '- basic sound player for background music, transitions with change of map' ,
        '- backend for items and inventory system created',
        '- items could now be picked up',
        '- no visual inventory yet, only console-print',
      ],
      showShort: false
    
    },
    {
      url: 'https://www.youtube.com/embed/uWdd6j2GUt4',
      title: 'Beginnings',
      description: ['I started off with a very rudimentary random world generator and the basic version of a dungeon generator, placing walls, rooms, corridors, doors and lastly stairs. Next followed movement and a yet still buggy vision range display. I also framed the image with placeholders for a top and bottom menu. As you can see, the use of doors as well as stairs and the random generation of new levels works impeccably.'],
      sdescription: [
        '- started off with a basic version of a random dungeon',
        '⠀   generator, placing walls, rooms, corridors, doors',
        '⠀   and lastly stairs.' ,
        '- added very rudimentary random world generator',
        '- movement',
        '- started on buggy vision range display',
        '- placeholders for a top and bottom menu added',
        '- doors, stairs & random level generation work impeccably'
      ],
      showShort: false
    }
  ];
}