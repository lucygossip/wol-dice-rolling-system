import { arcaneHeaders } from "../globals/globalObjects.mjs";

export function createTable(tableId) {
  let table = document.createElement("table");
  table.setAttribute("id", tableId);
  return table;
}

export function createTableItem(item, loc, content) {
  let elem = document.createElement(item);
  if (content !== "undefined") {
    elem.textContent = content;
  }
  loc.appendChild(elem);
  return elem;
}

export function createSpellTable(container, tableId, spellsArr, headers) {
  const newTable = createTable(tableId);
  newTable.classList.add("table-default-style", "spell-table");
  container.appendChild(newTable);
  let tr1 = createTableItem("tr", newTable);

  for (let i = 0; i < headers.length; i++) {
    if(headers[i] === "Damage" && !spellsArr[0].hasOwnProperty("damage")) {
      continue;
    }
    createTableItem("th", tr1, headers[i]);
  }

  for (let i = 0; i < spellsArr.length; i++) {
   let tr = createTableItem("tr", newTable);
 
   Object.values(spellsArr[i]).forEach(function (value) {
     createTableItem("td", tr, value);
   });
 }
}