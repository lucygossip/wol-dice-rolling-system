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

export function createSpellTable(container, tableId, spellsArr) {
  const newTable = createTable(tableId);
  container.appendChild(newTable);
  let tr1 = createTableItem("tr", newTable);
  for (let i = 0; i < arcaneHeaders.length; i++) {
    createTableItem("th", tr1, arcaneHeaders[i]);
  }

  for (let i = 0; i < spellsArr.length; i++) {
   let tr = createTableItem("tr", newTable);
 
   Object.values(spellsArr[i]).forEach(function (value) {
     createTableItem("td", tr, value);
   });
 }
}
