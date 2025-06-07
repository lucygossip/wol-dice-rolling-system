import { ranks } from "../globals/ranksObject.mjs";
import { staffs } from "../weapons/weaponObjects.mjs";
import { createOptions } from "../functions/helperFunctions.mjs";
import arcaneSpells from "./arcaneSpellObjects.mjs";

let staffValue = document.getElementById("arcane-calculator-staff");
let arcaneCertificate = document.getElementById(
  "arcane-calculator-certificate",
);
let spellList = document.getElementById("arcane-calculator-spell-list");

let staffNames = [];
staffNames.push("None");
for (let i = 0; i < staffs.length; i++) {
  staffNames.push(staffs[i].name);
}

createOptions(staffNames, staffValue);

let spellNames = [];
for (let i = 0; i < arcaneSpells.length; i++) {
  spellNames.push(arcaneSpells[i].name);
}

createOptions(spellNames, spellList);

// Get rank of spell
function getSpellRank() {
  let spellRank = "Wanderer";
  for (let i = 0; i < arcaneSpells.length; i++) {
    if (arcaneSpells[i].name === spellList.value) {
      let num = arcaneSpells[i].rank;
      console.log(arcaneSpells[i].name, num);
      for (let i = 0; i < ranks.length; i++) {
        if (ranks[i][1] === num - 1) {
          spellRank = ranks[i][0];
        }
      }
    }
  }
  return spellRank;
}

function getStaff() {
  return staffValue.value;
}

function getSpellDamage() {
  let spellRank = getSpellRank();
  let damage;
  switch (spellRank) {
    case "Wanderer":
      damage = 14;
      break;
    case "Journeyman":
      damage = 15;
      break;
    case "Ranger":
      damage = 16;
      break;
    case "Storyteller":
      damage = 17;
      break;
    case "Dreamweaver":
      damage = 18;
      break;
    case "Hero":
      damage = 19;
      break;
    case "Legend":
      damage = 20;
      break;
    default:
      0;
  }
  console.log(`Spell damage: ${damage}`);
  return damage;
}

function getStaffBonus() {
  let staffBonus;
  const staff = getStaff();
  for (let i = 0; i < staffs.length; i++) {
    if(staff === "None") {
      staffBonus = 0;
    } else if (staffs[i].name === staff) {
      staffBonus = staffs[i].buff;
    }
  }
  console.log(`Staff bonus: ${staffBonus}`);
  return staffBonus;
}

function getCertificate() {
  let bonus = 0;
  arcaneCertificate.checked ? (bonus = 1) : (bonus = 0);
  console.log(`Certificate bonus: ${bonus}`);
  return bonus;
}

function getEffectBonus() {
  let spellType = "None";

  for (let i = 0; i < arcaneSpells.length; i++) {
    if (arcaneSpells[i].name === spellList.value) {
      spellType = arcaneSpells[i].element;
    }
  }

  let bonus = 0;
  if (staffValue.value === "The Aspergil" && spellType === "Water") {
    bonus = 4;
  }
  if (staffValue.value === "Eykirris" && spellType !== "None") {
    bonus = 1;
  }
  if (staffValue.value === "Tide Turner" && spellType === "Water") {
    bonus = -6;
  }
  console.log(`Effect bonus: ${bonus}`);
  return bonus;
}

function calculateSpell(
  damage,
  staffBonus,
  arcaneCertificateBonus,
  effectBonus,
) {
  console.log(damage, staffBonus, arcaneCertificateBonus, effectBonus);
  const totalDamage =
    damage + staffBonus + arcaneCertificateBonus + effectBonus;
  console.log(`Total Damage: ${totalDamage}`);
  return totalDamage;
}

function appendTotalDamage() {
  let elem = document.getElementById("arcane-calculator-result");
  let p = document.createElement("p");
  let damage = calculateSpell(
    getSpellDamage(),
    getStaffBonus(),
    getCertificate(),
    getEffectBonus(),
  );
  p.textContent = `Total damage: ${damage}`;
  elem.innerHTML = "";
  elem.appendChild(p);
}

spellList.addEventListener("change", (e) => {
  e.preventDefault();
  appendTotalDamage();
});

staffValue.addEventListener("change", (e) => {
  e.preventDefault();
  appendTotalDamage();
});

arcaneCertificate.addEventListener("change", (e) => {
  e.preventDefault();
  appendTotalDamage();
});