import darkSpells from "./darkSpellObjects.mjs";
import { appendOption } from "../functions/helperFunctions.mjs";

const darkSpellSelector = document.getElementById("dark-spell-selector");
const darkSpellDisplay = document.getElementById("dark-spell-display");

for(let i = 0; i < darkSpells.length; i++) {
    appendOption(darkSpellSelector, darkSpells[i].name);
}

for(let spell of darkSpells) {
    let arr = [];
    if(spell.name === darkSpellSelector.value) {
        for (const [key, value] of Object.entries(spell)) {
            arr.push(`${key}: ${value}`);
          }
          let str = "";
        for(let i = 0; i < arr.length; i++) {
            str = `${arr[i]} `;
            darkSpellDisplay.append(str);
            let br = document.createElement("br");
            darkSpellDisplay.append(br);
        }
        
        /*let str = darkSpells.map((spell) => `${spell.name} | ${spell.rank} | ${spell.element} | ${spell.effect}`).join(', ');
        darkSpellDisplay.append(JSON.stringify(str)); */
    }
}

darkSpellSelector.addEventListener("change", (e) => {
    darkSpellDisplay.textContent = "";
    for(let spell of darkSpells) {
        let arr = [];
        if(spell.name === darkSpellSelector.value) {
            for (const [key, value] of Object.entries(spell)) {
                arr.push(`${key}: ${value}`);
              }
              let str = "";
            for(let i = 0; i < arr.length; i++) {
                str = `${arr[i]} `;
                darkSpellDisplay.append(str);
                let br = document.createElement("br");
                darkSpellDisplay.append(br);
            }
            
            /*let str = darkSpells.map((spell) => `${spell.name} | ${spell.rank} | ${spell.element} | ${spell.effect}`).join(', ');
            darkSpellDisplay.append(JSON.stringify(str)); */
        }
    }
})

// let namesString = income.map((item) => `${item.name} | ${item.amount} | ${item.isRecurring}`).join(", ");