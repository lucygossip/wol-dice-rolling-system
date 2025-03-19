import { ranks } from "../globals/ranksObject.mjs";
import {
  selectSpellRank,
  selectUserRank,
  diceRangeOutput,
  arcane,
} from "../globals/globalObjects.mjs";
import {
  appendOption,
  appendItem,
  getChanceOfSuccess,
} from "../functions/helperFunctions.mjs";
import { createSuccessTable } from "../functions/diceFunctions.mjs";

for (let i = 0; i < ranks.length; i++) {
  appendOption(selectUserRank, ranks[i][0]);
  if (ranks[i][0] === "Civilian") {
    continue;
  }
  appendOption(selectSpellRank, ranks[i][0]);
}

let chanceOfSuccess = getChanceOfSuccess(
  selectUserRank.value,
  selectSpellRank.value,
);

diceRangeOutput.textContent = "";
appendItem(createSuccessTable(chanceOfSuccess), diceRangeOutput);

document.addEventListener("change", (e) => {
  if (
    e.target.id === "user-rank" ||
    e.target.id === "spell-rank" ||
    e.target.id === "arcane"
  ) {
    chanceOfSuccess = getChanceOfSuccess(
      selectUserRank.value,
      selectSpellRank.value,
    );
    if (arcane.checked && selectUserRank.value !== "Civilian") {
      chanceOfSuccess += 1;
    }
  }

  console.log(`The chance of success is ${chanceOfSuccess}`);

  diceRangeOutput.textContent = "";
  appendItem(createSuccessTable(chanceOfSuccess), diceRangeOutput);
});
