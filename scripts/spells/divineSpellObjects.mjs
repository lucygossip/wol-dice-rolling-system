function divineSpell(name, rank, deity, effect, withCert) {
  this.name = name;
  this.rank = rank;
  this.deity = deity;
  this.effect = effect;
  this.withCert = withCert;
}

const divineSpells = [
  new divineSpell(
    "Tul of Solis",
    3,
    "Solis",
    "For ONE attack performed by the opponent, the user rolls a 1d6. A roll of 1-3 causes the attack to miss. A roll of 4-6 and the attack still hits. This applies to the first attack performed by the opponent AFTER the tul is cast",
    "A roll of 1-4 causes the attack to miss.",
  ),
  new divineSpell(
    "Tul of Helios",
    3,
    "Helios",
    "A non-status item is taken from the target. A coin gets flipped to decide if a weapon or armour piece gets taken. The lowest valued item out of the chosen category is removed.The opponent loses that item for the duration of the next turn, then gets it back again.",
    "2 items get taken",
  ),
  new divineSpell(
    "Prosperity",
    3,
    "Helios",
    "Each attack incurs 2 x 1d6 rolls. The more favourable outcome is chosen.",
    "3 x 1d6",
  ),
  new divineSpell(
    "Tul of Tenebria",
    3,
    "Tenebria",
    "Opponent(s) filled with dread/despair. -1 to every attack in the opponent's next dice roll.",
    "-2 to every attack",
  ),
  new divineSpell(
    "Tul of Lemuria",
    3,
    "Lemuria",
    "Flip a coin.Heads, and you gain 5hp.Tails and you get nothing.",
    "Flip a coin Heads, and you gain 10hp. Tails and you get nothing.",
  ),
  new divineSpell(
    "Salvation",
    3,
    "Lemuria",
    "If a user casts this spell right before getting knocked out, they gain 20hp and remain in the fight. Can only be used once per encounter.",
    "They gain 30hp",
  ),
  new divineSpell(
    "Tul of Lorelei",
    3,
    "Lorelei",
    "Decoy is created - Damage taken is halved for that turn",
    "Damage is quartered",
  ),
  new divineSpell(
    "Tul of Asmundis",
    3,
    "Asmundis",
    "An Asmundis deer is summoned. In the two turns following, this deer will do an additional 10 damage. This spell can only be cast if you do not currently have an animal summoned.",
    "This deer will attack for the next 3 turns.",
  ),
  new divineSpell(
    "Nature's Salve",
    3,
    "Asmundis",
    "If the opponent has used an attack that incurs a debuff, the debuff will be removed. If there is more than one debuff, the lowest will be removed. Applies to divine magic. Does not apply to status weapons or armour.",
    "If there is more than one debuff, all debuffs will be removed.",
  ),
  new divineSpell(
    "Slow",
    3,
    "Asmundis",
    "If the user typically rolls first, they will roll second for this turn.",
    "",
  ),
  new divineSpell(
    "Tul of Airi",
    4,
    "Airi",
    "Force the opponent to skip a turn. Can be done 3 times per encounter. The caster will automatically roll first for that turn. Their opponent does not get to roll as the caster forces them to skip their turn. In the event of two users casting the spell in the same turn, the turn order remains the same. The first caster gets the turn, and the spell does not activate for the second one.",
  ),
  new divineSpell(
    "Haste",
    3,
    "Airi",
    "If the user typically rolls second, they will roll first for this turn.",
    "",
  ),
];

export default divineSpells;
