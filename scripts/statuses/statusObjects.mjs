class Status {
  constructor(name, effect) {
    this.name = name;
    this.effect = effect;
  }
}

export const statuses = [
  new Status(
    "Blind Seer",
    `A Blind Seer is able to see their opponents dice roll's before they come into affect. Use of this ability is permitted 3 times per encounter.
        
        If the Blind Seer casts their ability, they automatically roll second for that turn. This applies even if they have rolled first in the rest of the duel.
        
        When blind seer status is activated:
For each of the opponent’s attacks (including animals):
1. Roll 1d6 for Blind Seer. If 1-4 is rolled, opponent’s attack misses.
2. If 5-6, attack continues as normal. Roll opponent’s attack.`,
  ),
  new Status(
    "Chronomancer",
    "A Chronomancer is able to perform the spell 'Memory Lane' - This reverts the duel back to a round of the caster's choosing. Can only be performed once per encounter.",
  ),
  new Status("Lich of the Valley", `The chance of an instant KO with the Hellraiser increases to 10%. Health drain effect from weapons and dark magic do not apply.
    
    If you are under "Hero" rank, your chance of success increases for dark spells (Rolls between 3-8 succeed).`),
  new Status("Necromancer", `"In a single pvp battle, the necromancer conjures a thrall with 30% of your starting HP (rounded up), that acts as your shield until it runs out.

    If there are multiple opponents, you may resurrect one fallen opponent to fight on your party's side"`),
  new Status("Oneiromancer", `You may deflect attack damage done to you onto another player 3 times per encounter. In single PVP duels this means it gets reflected back onto your opponent. In events with multiple players the oneiromance can pick their target from anyone on the field.

If the oneiromancer casts their ability, they automatically roll second for that turn. This applies even if they have rolled first in the rest of the duel.`),
  new Status("Orc Kin", "Each successful consecutive punch gains +2 per swing. Resets upon miss."),
  new Status("Shadowstryder", `-2 to all opponent's dice rolls. This effect does not stack with multiple Shadowstryders on the field. This ability is not affected by items that negate dark effects.`),
  new Status(
    "Silvertongue",`Opponent's health and player's attack damage are randomised:

--- Two 1d100 dice are rolled.
--- The first number decides the caster's new attack damage.
--- The second number decides the opponent's new amount of hp (this does not revert back).
--- The caster's new attack damage applies for that turn only. Even if their attack misses, this damage does not apply to future turns.`),
  new Status("Vampire", `-1 damage when encounter takes place during the day.
 +2 damage when encounter takes place at night.
At night time only: If you are under ""Hero"" rank, your chance of success increases for dark spells (Rolls between 3-8 succeed).`
  ),
  new Status("Warlord", `The whole party's attack damage gains maximum effectiveness for the duration of the encounter.`),
  new Status("Werewolf", `Is able to transform once during each encounter, this transformation lasts for the duration of three turns.
Attack damage is applied to all opponents on the field.
Attack damage is determined by a 1d6 per each user, with values ranging between 21-25 (A roll of 1 misses that player).`),
];

export const divineFavours = [
  new Status("Ashfallen", `+2 increase to fire spells.
 +2 increase to fire based weapons.`),
  new Status("Eyes of Greed", "50% increase in loot drops."),
  new Status("Flugel", `+2 increase to air spells.
 +2 increase to air based weapons.`),
  new Status("Lemuria's Light", "Regain 5% of their total HP each turn, rounded up to the nearest HP."),
  new Status("Therian", `+2 increase to earth spells.
 +2 increase to earth based weapons.`),
 new Status("Valik", `+2 increase to lightning spells.
 +2 increase to lightning based weapons.`),
  new Status("Waterbearer", `" +2 increase to water spells.
 +2 increase to water based weapons.`),
  new Status("Will O' The Wisp", `Conjures an ethereal weapon for the duration of the encounter, this weapon is additional to your usual loadout.
Base Damage: 3`),
];
