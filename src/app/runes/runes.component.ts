import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../safe.pipe';
import { RunesDescriptionComponent } from './description/runes-description.component';  // Import the description component

@Component({
  selector: 'app-runes',
  standalone: true,
  imports: [CommonModule, SafePipe, RunesDescriptionComponent], // Add RunesDescriptionComponent here
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent {
  // This will hold the content for the description section
  gameDescription = `

    The vision:

    Ever since my misspent youth in Final Fantasy IX online and untold other games the idea to build my own world and game around it started to form. 
    The long term goal is to make a good high fantasy MMORPG, set in a world of humans, elves, dwarves, Irai and a few other races as well as hordes 
    of monsters as well as the occasional dragon. Since I am still aquireing the skills for such a project, Runes of Elana is going to be a single player 
    precursor to that massive endeavor, hopefully containing many of the features to come in the massive multiplayer version.

    As i don't want to spoil too much of the storyline, here are a few of the main features i plan to implement:

    - Job/Class System: Players will be allowed to have a main class and later on either a sub-class, or optionally a selection of 5-10 skills from any
     other class at the price of not having a subclass. Leveling any class will not only raise the attributes for that class, but will also in a small way
     make the whole character better, meaning if you played a warrior first, your next class will already start with a bit more strength and hp, or more 
     mana if you played a mage first, etc..

    - No (Reachable) Hard Caps: Planned max level is at 50, but beyond that you will be able to receive Merit points instead of Level-Ups. Merit points will be used
    to increase main attributes as well as abileties in the skill trees. These increases will not have any hard caps, but prices will increase ever constantly 
    and drastically. Basically players plaing for a decade will have (limited) advantages over players playing a year or two, who again will be having advantages over players
    playing a month or two. Players with a 10th of the playtime of others may still be able to have better attributes and abileties than others if they spend 
    them wisely, for example if they only focus on their one main class/job, or if they die less, losing less experience.
    At certain thresholds of merits invested into the same class, the level may be displayed as 51, 52 ... (or maybe you will earn stars at that point?)
    As abileties and attributes will consume ever more rapidly increasing quanteties of merits, star levels will be exponentially more difficult to obtain.

    - Rune System: Enemies will not only drop equipable items but also runes. Players will be able to use up to 10 runes simultaineously, boosting the spells 
    attributes such as damage, range, mana consumption, duration and area of effect. Runes will not be slotted into any specific item or spell, meaning you can
    use the same rune for as many spells as you wish, swapping out individual runes depending on the needs of each spell and the availability of your runes.
    Runes will accumulate heat on use, and if you dont let them cool off you might damage them over time or even explode them if you really overdo it. 
    Players will be able to trade runes and merge them to higher tiers or grind unwanted runes down into dust to then use to create runes they need.
    There will be adequate substitutes for players that dont use magic, such as necklaces or bracelets full of rune-engraved beast fangs and claws, to the same effect.

    The inspiration herfore comes from the gear-swapping system in Final Fantasy XI or Warframe's mods and to some degree from Warhammer 40k's Farseers. 
    Where you may swap any of the 16 items in your equipment slots in FFXI within less than a second at any time, this is highly unrealistic, but it
    gives the desired functionality of being able to boost needed attributes for each individual action precisely. Warhammer's rune-wielding Farseers 
    use runes much in the way I am imagening them, and their functionality will be somewhere between those and warframe mods.
  
    - Skill Exp System: Any action you use will pay experince points into multiple exp-pools, slowly increasing your prowess in each of those categories,
     passively as well allowing you to spend points in customizeable skill trees.
    Imagine leveling up in your Lightning magic skill and finally switching from Lightning to a Chain-Lightning spell. Every lightning spellcast having paid
     into the Lighting Spell skill, the Lightning Element Skill, the Destructive magic skill, elemental magic skill and magic skill in general means if you 
     just swap from one lightning spell to the other, you will only start that one multiplicator from scratch, while you benefit from an already raised Lightning, 
     Destructive, Elemental and general Magic skill. If you change your class at any point, you will at least already have some points in Magic skills, 
     better than nothing, right!?

    - Transportation: A wide range of different means of transportation: 
      -- Spider based "bus-like" transportation from town to town (*Elder Scrolls Morrowind). 
      -- Light-based teleportation from Healers
      -- Nature-based teleportation by Druids from woods to woods.
      -- RARE Town portal scrolls(*Diablo) 
      -- Considering: "Call-To-Player / Party Member" (*WoW-Warlock)
      -- Considering:  from player to Town (*FFXI Blackmage)
    
    - Breedable Mount system:
      Wanted: A iconic mount that players will forever identify with my game world(s)
      Wanted: Breeding via eggs.
      Not Wanted: Boring old Horses.
      Not Tolerated at all: Mounts that break the immersion: aka. no cars, robots or anything that doesnt fit the game world!

    - Moving Landscapes: Terrains and entire zones that shift their positions and that may only be accessible at certain times (or at the expense of
      huge ressources outside of those times(time, items/gold)).
      I am thinking of giant crabs warlking around in the sea, with a town(*Brandon Sanderson's Stormlight Archive) or leveling zones on top or even 
      a dungeon inside. Depending on their location in the sea, the travel to the crabs could take anywhere between 3 min and 8 hours.
      I am thinking of giant trees with either slowly moving branches or massive moving trees (*Strange World) that function as access points 
      to those levels in the tree canopies.

    - Currency System:
    Runes of Elana will have multiple different currencies, all obtainable ingame. Different traders and nations will prefer one currency over others 
    and offer better prices in that currency. Certain currencies may also rise or fall in value due to player actions or interactions with each other.
    Players will have wallets and bank-contracts. Depending on your bank contract, cash in your wallet's teleport case will be ported to your bank at 
    regular intervals (more frequently if you pay your bank more). Your bank will store all your money in a standardized currency called Realm Standard (R$)
    Your wallet also has a cheque-book, allowing you to pay from your bank account anywhere in the world. Money upon your body on your death may 
    eventually be stolen if not protected otherwise. There will be NPC's to exchange currencies at certain rates, players may still offer better rates.
    
    - Weight system: Sadly in a game with thousands of players the amount of data needs to be controlled and so there has to be a limit to the amount 
    you can posess, plus in reality you are also limited to what you may carry. There will be items to increas your weight capacity, basically magic 
    bags, wallets and belts etc, that may counteract the weight of your items, allowing you to carry more. This will also be tuned to balance melee 
    and mage classes.




    Here is a long description of the Runes of Elana game. This will explain the mechanics, lore, 
    and how the gameplay evolves. You can expand this with more details if needed. 
    The game is about overcoming challenges and persevering through tough obstacles.
    Enjoy the journey! Here’s some more description text to make sure it's long enough to show the truncation.

  
  
  `;

  videoList = [
    {
      url: 'https://www.youtube.com/embed/KkL5_84KGeM',
      title: 'approx. Day 120',
      description: "Early in 2025, I finally got to a major issue I had been avoiding for some time: switching from a 'player moving over the map' kind of display to a 'map is moving and player is fixed in the center' display. This still remains buggy, as some of the optimizations for visual updates could not be ported and still have to be rethought and redone at a later point. Still, a lot of other content was added as well: the sound system was advanced to play sounds. Mining and digging holes works now, there is a working item description, a comparison menu between equipped and not equipped items, and the whole equipment, wallet, and tool menus are new. The time display was perfected. There are separate equipment screens for males and females, and other sexes may still be added. A highlight, I think, is my tool system, where every tool may be used for a multitude of tasks. Who says a pickaxe can only hack into walls and rock!? Want to use it as a hatchet to hack down trees? No problem. Or why should you not be able to use a shovel as a sickle to cut down grass or herbs? Money will go directly to your wallet if one is equipped and you have enough space in it. Consumables like potions, food, and scrolls were added. All the visual menus got (double)click-interactivity and a context menu with choices. A new castle zone was added. A hunger meter was added to the HP display."},
    {
      url: 'https://www.youtube.com/embed/FXta_dXG0II',
      title: 'approx. Day 100',
      description: 'After a longer break i got down to starting on a user interface for the inventory and simmilar displays. The visual inventory got methods to sort, move and resize the inventory and display its total weight. A lot of items got added and filled with values. Item description popup windows were still in the making at that point. A switch from utf-8 to unicodde symbols was made. Sadly how to use emojis still eludes me to this day. As a fun part to reward myself I introduced a portal spell that would connect two spots over the same map. I also created a globe display for hp and mp as well as two types of bar displays for xp and whatever else might follow. In the top right corner you will also notice the rudimentary beginnings of an ingame time display. Outside zones were added with lots of grass trees and sometimes rivers.'
    },
    {
      url: 'https://www.youtube.com/embed/iEfeIdoi7F0',
      title: 'approx. Day 40',
      description: 'About a month later I had the vision fixed so it would not show anything past non-transparent tiles. There is still a small issue with corner tiles flickering. The top display now had the ability to display messages. Item pickup got its own nice and stylish loot-menu box. A lot of preliminary work was done for harvesting and minin: Dungeons got different rock types and colors and pickaxes were introduces as first tools. I also implemented some convenience methods for debugging, like random and targeted teleportation and a full display of the map. Outside zones with trees grass and rivers were added to the overworld.'
    },
    {
      url: 'https://www.youtube.com/embed/V3eLi3ytSy8',
      title: 'Day 17',
      description: 'By day 17 i had my sound player set so it would play some background music depending on the area. The transitions were still a bit abrupt at that point. I built the basics for and item and inventory system and the pick-up method, even though displaying the inventory was still limited to console.'
    },
    {
      url: 'https://www.youtube.com/embed/uWdd6j2GUt4',
      title: 'Beginnings',
      description: ' I started off with a very rudimentary random world generator and the basic version of a dungeon generator, placing walls, rooms, corridors, doors and lastly stairs. Next followed movement and a yet still buggy vision range display. I also framed the image with placeholders for a top and bottom menu. As you can see, the use of doors as well as stairs and the random generation of new levels works impeccably.'
    }
  ];
}