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
      content: [`- High fantasy RPG with minimal steampunk elements as inspired by ADOM, Final Fantasy XI online or seen in World of Warcraft`,
                '- Set in an engaging world with lots of lore, deep background and story',
                '- Traditional races such as Humans, Dwarves and Elves and new races such as the Irai',
                '- planned for more than 20 classes (such as Paladin, Druid, Thief, Assassin, Ranger...)',
                '- Breeding System for mounts',
                '- Gathering and Crafting System for just about everything',
                '- Detailed skill leveling system',
                '- rune system (inspired by Warhammer 40k, Warframe and FFXI)',
                '- currency system with multiple currencies and interchange rates as well as bank accounting system',
      ],
      isEmpty: false
    },
    {
      id: 'vision',
      title: 'The Vision',
      image: 'assets/images/roe4.jpg',
      content: [`Ever since my misspent youth in Final Fantasy IX online and untold other games the idea to build my own world and game around it started to form. 
                  The long term goal is to make a good high fantasy MMORPG, set in a world of humans, elves, dwarves, Irai and a few other races as well as hordes 
                  of monsters and the occasional dragon. Since I am still aquireing the skills for such a project, Runes of Elana is going to be a single player 
                  precursor to that massive endeavor, hopefully containing many of the features to come in the massive multiplayer version.`,
                ],
                  isEmpty: false
    },
    {
      id: 'curr',
      title: 'Current Features',
      image: 'assets/images/roe2.jpg',
      content: [`video diary to see more`,
      ],
      isEmpty: false
    },
    {
      id: 'plan',
      title: 'Planned Features',
      image: 'assets/images/roe2.jpg',
      content: [`Players can have a main class...`,
      ],
      isEmpty: false
    },
    {
      id: 'class-system',
      title: 'Class System',
      image: 'assets/images/roe3.jpg',
      content: [`Currently the goal is to create a system with main and sub classes, which the player may change at any time at minimal cost. A system to pick 5-10 skills from all of your leveled classes instead of a sub-class may be added as well. 
                Leveling any class will not only raise the attributes for that class, but will also in a small way
                make the whole character better, meaning if you played a warrior first, your next class will already start with a bit more strength and hp, or more mana if you played a mage first, etc..
                Classes may range from typical fantasy classes such as Paladin, Warrior, Ranger, Druid, Thief and Assassin to a range of select new class ideas:
                Try a Fayde, a class that specializes in throwing cards like blades, benefiting from the cards quality and depiction, collect cards and play games with them, and even on occasion glimpse at the future.
                How about a Lyran, a soldier who put themselves under the ordeal of getting werewolf organs implanted, giving them powers of regeneration and growth at will.
                Play a Bladestorm, constantly holding a handfull of blades in the air using telepathy and wind magic, striking the target from any direction.
                Ever wanted to not only summon a Golem, but drive it yourself? Try a Golem Master and merge into your golem, giving you a thick outer shell, ideal for any tank or melee damage-dealer. 
                Past necromancer lies an even darker craft: Krul summoners collect skulls and bones from every kill and build their own skeletal construct. But Krul arent simply mindless skeltons, no, their masters cover them in muscles out of dirt and then give them life by summoning demons from the beyond to animate them.
                And there are more custom classes up my sleeve, but we wouldn't want to spoil all the fun already.`,
              ],
      isEmpty: false
    },
    {
      id: 'softCaps',
      title: 'Soft Caps only',
      image: 'assets/images/roe_5.jpg',
      content: [`The planned max level is at 50, but beyond that you will be able to receive Merit points instead of Level-Ups. Merit points will be used
                to increase main attributes as well as abileties in the skill trees. These increases will not have any hard caps, but prices will increase ever constantly 
                and drastically.`,
                `Basically players plaing for a decade will have (limited) advantages over players playing a year or two, who again will be having advantages over players
                playing a month or two. Players with a 10th of the playtime of others may still be able to have better attributes and abileties than others if they spend 
                them wisely, for example if they only focus on their one main class/job, or if they die less, losing less experience.`,
                `At certain thresholds of merits invested into the same class, the level may be displayed as 51, 52 ... (or maybe you will earn stars at that point?)
                As abileties and attributes will consume ever more rapidly increasing quanteties of merits, star levels will be exponentially more difficult to obtain.`
    ,
  ],
      isEmpty: false
    },
    {
      id: 'runeSys',
      title: 'Rune System',
      image: 'assets/images/roe2.jpg',
      content: [`Enemies will not only drop equipable items but also runes. Players will be able to use up to 10 runes simultaineously, boosting the spells 
                attributes such as damage, range, mana consumption, duration, area of effect and many more. Runes will not be slotted into any specific item or spell, meaning you can
                use the same rune for as many spells as you wish, swapping out individual runes depending on the needs of each spell and the availability of your runes.
                Runes will accumulate heat on use, and if you dont let them cool off you might damage them over time or even explode them if you really overdo it. 
                Players will be able to trade runes and merge them to higher tiers or grind unwanted runes down into dust to then create runes they need.
                There will be adequate substitutes for players that dont use magic, such as necklaces or bracelets full of rune-engraved beast fangs and claws, to the same effect.

                The inspiration herfore comes from the gear-swapping system in Final Fantasy XI or Warframe's mods and to some degree from Warhammer 40k's Farseers. 
                Where you may swap any of the 16 items in your equipment slots in FFXI within less than a second at any time, this is highly unrealistic, but it
                gives the desired functionality of being able to boost needed attributes for each individual action precisely. Warhammer's rune-wielding Farseers 
                use runes much in the way I am imagening them, and their functionality will be somewhere between those and the mods in Warframe.
    `,
  ],
      isEmpty: false
    },
    {
      id: 'skillExp',
      title: 'Skill Experience',
      image: 'assets/images/roe_5.jpg',
      content: [`Any action you use will pay experince points into multiple exp-pools, slowly increasing your prowess in each of those categories,
                passively as well as allowing you to spend points in customizeable skill trees.
                Imagine leveling up in your Lightning magic skill and finally switching from Lightning to a Chain-Lightning spell. Every lightning spellcast having paid
                into the Lighting Spell skill, the Lightning Element Skill, the Destructive magic skill, elemental magic skill and magic skill in general means if you 
                just swap from one lightning spell to the other, you will only start that one multiplicator from scratch, while you benefit from an already raised Lightning, 
                Destructive, Elemental and general Magic skill. If you change your class at any point, you will at least already have some points in Magic skills, 
                better than nothing, right!?.
    `,
  ],
      isEmpty: false
    },
    {
      id: 'transp',
      title: 'Transportation',
      image: 'assets/images/roe_5.jpg',
      content: [`A wide range of different means of transportation:`,
                '-- Spider based "bus-like" transportation from town to town (*Elder Scrolls Morrowind).',
                '-- Light-based teleportation from Healers',
                '-- Nature-based teleportation by Druids from woods to woods.',
                '-- RARE Town portal scrolls(*Diablo)',
                '-- Considering: "Call-To-Player / Party Member" (*WoW-Warlock)',
                '-- Considering:  from player to Town (*FFXI Blackmage).'
    ,
  ],
      isEmpty: false
    },
    {
      id: 'mounts',
      title: 'Breeding Mounts',
      image: 'assets/images/roe_5.jpg',
      content: [`Wanted: A iconic mount that players will forever identify with my game world(s)`,
                'Wanted: Breeding via eggs.',
                'Not Wanted: Boring old Horses.',
                'Not Tolerated at all: Mounts that break the immersion: aka. no cars, robots or anything that doesnt fit the game world!.',
    
  ],
      isEmpty: false
    },
    {
      id: 'movLand',
      title: 'Moving Landscapes',
      image: 'assets/images/roe_5.jpg',
      content: [`Terrains and entire zones that shift their positions and that may only be accessible at certain times (or at the expense of
                huge ressources outside of those times(time, items/gold)).
                I am thinking of giant crabs warlking around in the sea, with a town(*Brandon Sanderson's Stormlight Archive) or leveling zones on top or even 
                a dungeon inside. Depending on their location in the sea, the travel to the crabs could take anywhere between 3 min and 8 hours.
                I am thinking of giant trees with either slowly moving branches or massive moving trees (*Strange World) that function as access points 
                to those levels in the tree canopies.
    `,
  ],
      isEmpty: false
    },
    {
      id: 'currencySys',
      title: 'Currencies',
      image: 'assets/images/roe_5.jpg',
      content: [`Runes of Elana will have multiple different currencies, all obtainable ingame. Different traders and nations will prefer one currency over others 
                and offer better prices in that currency. Certain currencies may also rise or fall in value due to player actions or interactions with each other.
                Players will have wallets and bank-contracts. Depending on your bank contract, cash in your wallet's teleport case will be ported to your bank at 
                regular intervals (more frequently if you pay your bank more). Your bank will store all your money in a standardized currency called Realm Standard (R$)
                Your wallet also has a cheque-book, allowing you to pay from your bank account anywhere in the world. Money upon your body on your death may 
                eventually be stolen if not protected otherwise. There will be NPC's to exchange currencies at certain rates, players may still offer better rates.
    `,
  ],
      isEmpty: false
    },
    {
      id: 'weightSys',
      title: 'Weigth',
      image: 'assets/images/roe5.jpg',
      content: [`Sadly in a game with thousands of players the amount of data needs to be controlled and so there has to be a limit to the amount 
                you can possess, plus in reality you are also limited to what you may carry. There will be items to increas your weight capacity, basically magic 
                bags, wallets and belts etc, that may counteract the weight of your items, allowing you to carry more. This will also be tuned to balance melee 
                and mage classes, so that classes with high strength values will not have an overwhelming advantagein this regard.
    `,
  ],
      isEmpty: false
    },
    {
      id: 'future',
      title: 'MMORPG plans',
      image: 'assets/images/roe2.jpg',
      content: [`The long term goal is to make a good high fantasy MMORPG, set in a world of humans, elves, dwarves, Irai and a few other races as well as hordes 
                of monsters as well as the occasional dragon.`,
              ],
      isEmpty: false
    },
    {
      id: 'inspirations',
      title: 'Inspirations',
      image: 'assets/images/inspiration.jpg',
      content: [`- Final Fantasy XI: mounts, merits, gear-swap, some classes, ...`,
      '- Warframe: the mod system',
      '- Ancient Domains of Mystery (ADOM): world building, and lots of other aspects',
      '- Hearthstone: trading card collector and game',
      '- TES III - Morrowind: Stilt walkers, alchemical ingredients -> staged reveal of effects',
      '- Warhammer 40k books: Farseer`s rune usage',
      '- Stratego (board game): nice game to play with trading cards?',
      '- Strange World & Brandon Sanderson`s Stormlight Archive: moving landscapes, be it living trees or massive crabs',
      '- Stonehenge: masive stone gates, opening portals to druid woods',
      '- Wizardry 8: Gadgeteer as inspiration for Gundgeteer class',
      '- Potion Craft - Alchemy simulator: simply WOW for a crafting system!!!',
      '- Night Angel series (Brent Weeks): Krul Summoners, simply too good to pass on',
      '- ... LotR, Dune, Saga of the 7 Suns, Kingskiller Chronicles, Atlantis, ....',
    ],
      isEmpty: false
    },
    // ... more segments












  /* Video*/
    {
      id: 'vidDiaryEmpty',
      title: 'Video Diary',
      image: '',
      content: [``],
      isEmpty: true
    },
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