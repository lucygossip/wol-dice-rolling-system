import { fetchRank } from "./helperFunctions.mjs";
import { validateCertificates } from "./validationFunctions.mjs";

export function createDiceRange(num, rank, cat, weap) {
  let rankObj = fetchRank(rank);
  num += Number(rankObj); //The increase is added to the base to give a new base
  const arr = [
    //The first number is the dice roll, the second number is the amount of extra damage
    [1, 0], //A roll of 1 will always miss and do 0 damage
  ];
  if (cat !== "") {
    num += Number(validateCertificates(cat, weap));
  }
  arr.push([2, num]); // A roll of 2 will always do the base damage)
  for (let i = 3; i <= 6; i++) {
    num += 1;
    arr.push([i, num]); // For each increase in dice roll, the damage increases by 1.
  }
  return arr;
}

export function createStaticDiceRange(num) {
  let arr = [[1, 0]];
  for (let i = 2; i <= 6; i++) {
    arr.push([i, num]);
  }
  return arr;
}

export function createDiceTable(diceRange) {
  let table = document.createElement("table");
  table.classList.add("table-default");
  let tr1 = document.createElement("tr");
  tr1.setAttribute("id", "dice-table-tr1");
  let tr2 = document.createElement("tr");
  tr2.setAttribute("id", "dice-table-tr-2");
  let th1 = document.createElement("th");
  th1.textContent = "Dice Roll";
  tr1.appendChild(th1);
  let th2 = document.createElement("th");
  th2.textContent = "Damage";
  tr2.appendChild(th2);

  for (let item of diceRange) {
    let td1 = document.createElement("td");
    td1.textContent = item[0];
    let td2 = document.createElement("td");
    td2.textContent = item[1];
    tr1.appendChild(td1);
    tr2.appendChild(td2);
  }
  table.appendChild(tr1);
  table.appendChild(tr2);
  return table;
}
// Creates the tables to display the dice rolls and damage values
