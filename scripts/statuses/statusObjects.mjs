class Status {
    constructor(name, effect) {
        this.name = name;
        this.effect = effect;
    }
}

export const statuses = [
    new Status("Blind Seer", "A Blind Seer is able to see their opponents dice roll's before they come into affect. Use of this ability is permitted 3 times per encounter. If the Blind Seer casts their ability, they automatically roll second for that turn. This applies even if they have rolled first in the rest of the duel. For each attack performed by the opponent (including animals), the Blind Seer rolls a 1d6. A roll of 1-4 causes the attack to miss. A roll of 5-6 and the attack still hits."),
    new Status("Chronomancer", "The chance of an instant KO with the Hellraiser increases to 10%. Health drain effect from weapons and dark magic do not apply. A Chronomancer is able to perform the spell 'Memory Lane' - This reverts the duel back to a round of the caster's choosing. Can only be performed once per encounter."),
    new Status("Lich of the Valley", ""),
    new Status("Necromancer", ""),
    new Status("Oneiromancer", ""),
    new Status("Orc Kin", ""),
    new Status("Shadowstryder", ""),
    new Status("Silvertongue", "Opponent's health and player's attack damage are randomised. Two 1d100 dice are rolled. The first number decides the caster's new attack damage. The second number decides the opponent's new amount of hp. The caster's new attack damage applies for that turn only. Even if their attack misses, this damage does not apply to future turns."),
    new Status("Vampire", ""),
    new Status("Warlord", ""),
    new Status("Werewolf", ""),
]

export const divineFavours = [
    new Status("Ashfallen", ""),
    new Status("Eyes of Greed", ""),
    new Status("Flugel", ""),
    new Status("Lemuria's Light", ""),
    new Status("Therian", ""),
    new Status("Waterbearer", ""),
    new Status("Will O' The Wisp", ""),
]