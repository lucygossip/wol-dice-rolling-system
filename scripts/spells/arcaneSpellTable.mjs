import { arcane, arcaneSpellList, arcaneSpellListContainer } from "../globals/globalObjects.mjs"
import { createSpellTable } from "../functions/tableFunctions.mjs"
import arcaneSpells from "./arcaneSpellObjects.mjs"
import { sortByValue, summarize } from "../functions/helperFunctions.mjs";

for (let i = 0; i < arcaneSpells.length; i++) {
    arcaneSpellList.push(arcaneSpells[i].name);
  }
  
  //console.log(sortByValue(arcaneSpells, "Fire"));

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

  /* createSpellTable(arcaneSpellListContainer, "arcane-spells-table-general", generalSpells);
  createSpellTable(arcaneSpellListContainer, "arcane-spells-table-fire", fireSpells);
  createSpellTable(arcaneSpellListContainer, "arcane-spells-table-water", waterSpells);
  createSpellTable(arcaneSpellListContainer, "arcane-spells-table-earth", earthSpells);
  createSpellTable(arcaneSpellListContainer, "arcane-spells-table-air", airSpells);
  createSpellTable(arcaneSpellListContainer, "arcane-spells-table-lightning", lightningSpells);
  createSpellTable(arcaneSpellListContainer, "arcane-spells-table-crystal", crystalSpells);
  createSpellTable(arcaneSpellListContainer, "arcane-spells-table-magma", magmaSpells);
  createSpellTable(arcaneSpellListContainer, "arcane-spells-table-light", lightSpells);
  createSpellTable(arcaneSpellListContainer, "arcane-spells-table-ice", iceSpells);
  createSpellTable(arcaneSpellListContainer, "arcane-spells-table-sand", sandSpells);
  */

  const summaryGeneral = summarize(arcaneSpellListContainer, "summary-general-spells", "General Spells");
  const summaryFire = summarize(arcaneSpellListContainer, "summary-fire-spells", "Fire Spells");
  const summaryWater = summarize(arcaneSpellListContainer, "summary-water-spells", "Water Spells");
  const summaryEarth = summarize(arcaneSpellListContainer, "summary-earth-spells", "Earth Spells");
  const summaryAir = summarize(arcaneSpellListContainer, "summary-air-spells", "Air Spells");
  const summaryLightning = summarize(arcaneSpellListContainer, "summary-lightning-spells", "Lightning Spells");
  const summaryCrystal = summarize(arcaneSpellListContainer, "summary-crystal-spells", "Crystal Spells");
  const summaryMagma = summarize(arcaneSpellListContainer, "summary-magma-spells", "Magma Spells");
  const summaryLight = summarize(arcaneSpellListContainer, "summary-light-spells", "Light Spells");
  const summaryIce = summarize(arcaneSpellListContainer, "summary-ice-spells", "Ice Spells");
  const summarySand = summarize(arcaneSpellListContainer, "summary-sand-spells", "Sand Spells");

  createSpellTable(document.getElementById(summaryGeneral), "arcane-spells-table-general", generalSpells);
  createSpellTable(document.getElementById(summaryFire), "arcane-spells-table-fire", fireSpells);
  createSpellTable(document.getElementById(summaryWater), "arcane-spells-table-water", waterSpells);
  createSpellTable(document.getElementById(summaryEarth), "arcane-spells-table-earth", earthSpells);
  createSpellTable(document.getElementById(summaryAir), "arcane-spells-table-air", airSpells);
  createSpellTable(document.getElementById(summaryLightning), "arcane-spells-table-lightning", lightningSpells);
  createSpellTable(document.getElementById(summaryCrystal), "arcane-spells-table-crystal", crystalSpells);
  createSpellTable(document.getElementById(summaryMagma), "arcane-spells-table-magma", magmaSpells);
  createSpellTable(document.getElementById(summaryLight), "arcane-spells-table-light", lightSpells);
  createSpellTable(document.getElementById(summaryIce), "arcane-spells-table-ice", iceSpells);
  createSpellTable(document.getElementById(summarySand), "arcane-spells-table-sand", sandSpells);



  /*
  const arcaneSpellsGeneral = createTable("arcane-spells-table-general");
  const arcaneSpellsFire = createTable("arcane-spells-table-fire");
  arcaneSpellListContainer.appendChild(arcaneSpellsGeneral);
  arcaneSpellListContainer.appendChild(arcaneSpellsFire);
  
  let tr1 = createTableItem("tr", arcaneSpellsGeneral);
  
  for (let i = 0; i < arcaneHeaders.length; i++) {
    createTableItem("th", tr1, arcaneHeaders[i]);
  }
  
  for (let i = 0; i < arcaneSpells.length; i++) {
    let tr = createTableItem("tr", arcaneSpellsGeneral);
  
    Object.values(arcaneSpells[i]).forEach(function (value) {
      createTableItem("td", tr, value);
    });
  }
    */