import { diceRangeOutput } from "../globals/globalObjects.mjs";
import { validateDamage } from "./validationFunctions.mjs";
import { createDiceTable, createDiceRange } from "./diceFunctions.mjs";
import {
  weaponSelector,
  weaponDisplay,
  rankSelector,
} from "../globals/globalObjects.mjs";
import { weapons } from "../weapons/weaponObjects.mjs";
import { displayItem } from "./helperFunctions.mjs";

export function addGlobalEventListener(
  type,
  selector,
  callback,
  options,
  parent = document,
) {
  parent.addEventListener(
    type,
    (e) => {
      if (e.target.matches(selector)) callback(e);
    },
    options,
  );
}

/*
  Adding a global click event listener for elements with the class 'example-class':
  
  addGlobalEventListener('click', '.example-class', (event) => {
    console.log('Element clicked:', event.target);
  });
  
  See more: https://medium.com/@jacobchodubski/10-useful-js-utility-functions-that-save-time-ac0198587d4f
  */

export function listen(location, weap) {
  addGlobalEventListener("change", location, () => {
    displayItem(weaponSelector.value, weapons, weaponDisplay);
    for (let weapon of weapons) {
      if (weapon.name === weaponSelector.value) {
        weap = weapon;
      }
    }

    diceRangeOutput.textContent = "";

    let diceRangeData;
    let validated = validateDamage(weap.baseDamage, weap.cat, weap.static);

    if (validated === 0) {
      diceRangeData = zeroBaseDamage;
    } else if (validated === 1) {
      diceRangeData = createStaticDiceRange(weap.baseDamage);
    } else if (validated === 2) {
      diceRangeData = createDiceRange(
        Number(weap.baseDamage),
        rankSelector.value,
        weap.cat,
        weap,
      );
    }

    let diceTable = createDiceTable(diceRangeData);
    diceRangeOutput.appendChild(diceTable);
  });
}
