class darkSpell {
    constructor(name, rank, element, effect) {
      this.name = name;
      this.rank = rank;
      this.element = element;
      this.effect = effect;
    }
  }

  const darkSpells = [
    new darkSpell("Leech", 6, "dark", "A 1d6 is rolled. The value of the dice is removed from the opponent's hp and added to the user's hp."),
    new darkSpell("Curse", 7, "dark", "If the target attempts a healing spell in the next 3 turns, it will automatically fail. Lemuria's Light is immune."),
    new darkSpell("Phobos Manifestation", 7, "dark", `For every subsequent turn until the hallucination is broken, the chance of a hit is greatly reduced.
      For weapons: Rolls of 1-3 is a miss.
      For spells: Depending on your rank, usual chance of missing + 2 extra.
      Additionally, a 1d6 is rolled at the start of each turn to attempt to break the hallucination. (This 1d6 does not receive a debuff) The hallucination is broken if the user rolls a 6.`),
    new darkSpell("Pain Perception", 7, "dark", "The caster pays a toll of 5hp, in exchange for casting 25 damage at the opponent. If the caster misses, they still have to pay this toll."),
    new darkSpell("Black Chain", 7, "dark", "The opponent gets wrapped up in chains, which drains the power of their attacks. This starts at 5hp. If the caster successfully uses this spell in consecutive turns, the drain effect increases by 3 damage per successful turn. If the opponent's attack misses while wrapped up in chains, they lose that amount of HP instead."),
    new darkSpell("Wither", 7, "dark", "This spell behaves like a siphon - Once cast, the caster steals 5hp from the opponent in each subsequent turn."),
    new darkSpell("Tenebrous Shroud", 8, "dark", "Turns the environment dark. If successfully casted, Shadow Orb can be used in the next turn."),
    new darkSpell("Shadow Orb", 8, "dark", "The effect of this spell lasts for the duration of the turn in which it is cast. With this effect in play, the caster's second spell becomes 2.5 x more powerful. E.g. A legend spell of 20 damage will output 50 damage."),
    new darkSpell("Cursed Weapon", 8, "dark", "The caster flips a coin. If heads, they exchange 15hp for a one handed war axe with a base damage of 17. Each turn, another coin is flipped. If heads, the caster keeps the weapon and it gains +2 damage (stacking). If tails, the weapon disappears and is reset to its original state."),
    new darkSpell("Sacrificial Lamb", 8, "dark", "The caster pays a toll of 10hp, in exchange for casting 30 damage at the opponent. If the caster misses, they still have to pay this toll."),
    new darkSpell("Divine Intervention", 8, "dark", "The effects of the opponent's status weapon are removed for the duration of the turn. Ivella Ro Cinys is immune"),
    new darkSpell("Blood Manipulation", 8, "dark", "The caster exchanges 10hp to increase the power of one weapon for the duration of the duel. Note: Staffs are not affected as they do not do physical damage."),
    new darkSpell("Arcane Suppression", 8, "dark", "This spell can only be cast once per encounter. Subsequent attempts will fail. If successfully cast, any spell cast by the opponent is guaranteed to fail in that turn. Over the next 5 turns, the chance of failure will slowly reduce by 1, until it has returned to normal."),
  ];

  export default darkSpells;