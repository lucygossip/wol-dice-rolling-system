import { ranks } from "../globals/ranksObject.mjs";
import { weapons } from "./weaponObjects.mjs";
import { listen } from "../functions/eventListeners.mjs";
import { createOptions, displayItem } from "../functions/helperFunctions.mjs";
import { validateDamage } from "../functions/validationFunctions.mjs";
import {
  createDiceTable,
  createDiceRange,
  createStaticDiceRange,
} from "../functions/diceFunctions.mjs";
import {
  weaponSelector,
  weaponList,
  weaponDisplay,
  rankSelector,
  diceRangeOutput,
  zeroBaseDamage,
} from "../globals/globalObjects.mjs";

// Inits

let currentWeapon = weapons[0];

for (let i = 0; i < weapons.length; i++) {
  weaponList.push(weapons[i].name);
}

createOptions(weaponList, weaponSelector);
createOptions(ranks, rankSelector, 0);

displayItem(weaponSelector.value, weapons, weaponDisplay);

let diceRangeData;
let validated = validateDamage(
  currentWeapon.baseDamage,
  currentWeapon.cat,
  currentWeapon.static,
);

if (validated === 0) {
  diceRangeData = zeroBaseDamage;
} else if (validated === 1) {
  diceRangeData = createStaticDiceRange(currentWeapon.baseDamage);
} else if (validated === 2) {
  diceRangeData = createDiceRange(
    Number(currentWeapon.baseDamage),
    rankSelector.value,
    currentWeapon.cat,
  );
}

let diceTable = createDiceTable(diceRangeData);
diceRangeOutput.appendChild(diceTable);

listen("#weapon-selector", currentWeapon, diceRangeData);
listen("#rank", currentWeapon, diceRangeData);
listen("#melee", currentWeapon, diceRangeData);
listen("#archery", currentWeapon, diceRangeData);
listen("#arcane", currentWeapon, diceRangeData);
