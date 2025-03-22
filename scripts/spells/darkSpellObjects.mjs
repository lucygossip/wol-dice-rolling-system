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
    new darkSpell("Curse", 7, "dark", "If the target attempts a healing spell in the next 3 turns, it will automatically fail. Lemuria's Light is immune.")
  ];

  export default darkSpells;