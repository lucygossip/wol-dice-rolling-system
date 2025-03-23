export const weaponList = [];

export const arcaneSpellList = [];

export const arcaneHeaders = [
  "Spell",
  "Rank",
  "Element",
  "Effect",
  "Damage"
]

export const divineHeaders = [
  "Name",
  "Rank",
  "Effect",
  "With Divine Certificate"
]

export const weaponSelector = document.getElementById("weapon-selector");

export const arcaneSpellSelector = document.getElementById("arcane-spell-selector");

export const arcaneSpellListContainer = document.getElementById("arcane-spell-list-container");

export const divineSpellListContainer = document.getElementById("divine-spell-list-container");

export const darkSpellListContainer = document.getElementById("dark-spell-list-container");

export const weaponDisplay = document.getElementById("weapon-display");

export const diceRange = document.getElementById("dice-range");

export const rankSelector = document.getElementById("rank");

export const selectUserRank = document.getElementById("user-rank");

export const selectSpellRank = document.getElementById("spell-rank");

export const diceRangeOutput = document.getElementById("dice-range-output");

export const zeroBaseDamage = [
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 0],
];
// This is needed for staffs, which do 0 base damage, but instead add a buff to spells.

export const melee = document.getElementById("melee");

export const archery = document.getElementById("archery");

export const arcane = document.getElementById("arcane");
