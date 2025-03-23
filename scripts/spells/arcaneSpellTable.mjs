import {
  arcaneHeaders,
  arcaneSpellList,
  arcaneSpellListContainer,
} from "../globals/globalObjects.mjs";
import { createSpellTable } from "../functions/tableFunctions.mjs";
import arcaneSpells from "./arcaneSpellObjects.mjs";
import { sortByValue, summarize } from "../functions/helperFunctions.mjs";

for (let i = 0; i < arcaneSpells.length; i++) {
  arcaneSpellList.push(arcaneSpells[i].name);
}

const generalSpells = sortByValue(arcaneSpells, "None");
const fireSpells = sortByValue(arcaneSpells, "Fire");
const waterSpells = sortByValue(arcaneSpells, "Water");
const earthSpells = sortByValue(arcaneSpells, "Earth");
const airSpells = sortByValue(arcaneSpells, "Air");
const lightningSpells = sortByValue(arcaneSpells, "Lightning");
const crystalSpells = sortByValue(arcaneSpells, "Crystal");
const magmaSpells = sortByValue(arcaneSpells, "Magma");
const lightSpells = sortByValue(arcaneSpells, "Light");
const iceSpells = sortByValue(arcaneSpells, "Ice");
const sandSpells = sortByValue(arcaneSpells, "Sand");

const summaryGeneral = summarize(
  arcaneSpellListContainer,
  "summary-general-spells",
  "General Spells",
);
const summaryFire = summarize(
  arcaneSpellListContainer,
  "summary-fire-spells",
  "Fire Spells",
);
const summaryWater = summarize(
  arcaneSpellListContainer,
  "summary-water-spells",
  "Water Spells",
);
const summaryEarth = summarize(
  arcaneSpellListContainer,
  "summary-earth-spells",
  "Earth Spells",
);
const summaryAir = summarize(
  arcaneSpellListContainer,
  "summary-air-spells",
  "Air Spells",
);
const summaryLightning = summarize(
  arcaneSpellListContainer,
  "summary-lightning-spells",
  "Lightning Spells",
);
const summaryCrystal = summarize(
  arcaneSpellListContainer,
  "summary-crystal-spells",
  "Crystal Spells",
);
const summaryMagma = summarize(
  arcaneSpellListContainer,
  "summary-magma-spells",
  "Magma Spells",
);
const summaryLight = summarize(
  arcaneSpellListContainer,
  "summary-light-spells",
  "Light Spells",
);
const summaryIce = summarize(
  arcaneSpellListContainer,
  "summary-ice-spells",
  "Ice Spells",
);
const summarySand = summarize(
  arcaneSpellListContainer,
  "summary-sand-spells",
  "Sand Spells",
);

createSpellTable(
  document.getElementById(summaryGeneral),
  "arcane-spells-table-general",
  generalSpells,
  arcaneHeaders
);
createSpellTable(
  document.getElementById(summaryFire),
  "arcane-spells-table-fire",
  fireSpells,
  arcaneHeaders
);
createSpellTable(
  document.getElementById(summaryWater),
  "arcane-spells-table-water",
  waterSpells,
  arcaneHeaders
);
createSpellTable(
  document.getElementById(summaryEarth),
  "arcane-spells-table-earth",
  earthSpells,
  arcaneHeaders
);
createSpellTable(
  document.getElementById(summaryAir),
  "arcane-spells-table-air",
  airSpells,
  arcaneHeaders
);
createSpellTable(
  document.getElementById(summaryLightning),
  "arcane-spells-table-lightning",
  lightningSpells,
  arcaneHeaders
);
createSpellTable(
  document.getElementById(summaryCrystal),
  "arcane-spells-table-crystal",
  crystalSpells,
  arcaneHeaders
);
createSpellTable(
  document.getElementById(summaryMagma),
  "arcane-spells-table-magma",
  magmaSpells,
  arcaneHeaders
);
createSpellTable(
  document.getElementById(summaryLight),
  "arcane-spells-table-light",
  lightSpells,
  arcaneHeaders
);
createSpellTable(
  document.getElementById(summaryIce),
  "arcane-spells-table-ice",
  iceSpells,
  arcaneHeaders
);
createSpellTable(
  document.getElementById(summarySand),
  "arcane-spells-table-sand",
  sandSpells,
  arcaneHeaders
);
