import { ranks } from "../globals/ranksObject.mjs";
import { arcane } from "../globals/globalObjects.mjs";

export function openTab(tabname) {
  let tabList = document.getElementsByClassName("tab");
  for (let i = 0; i < tabList.length; i++) {
    tabList[i].style.display = "none";
  }
  document.getElementById(tabname).style.display = "block";
}

export function pushArray(arr, arr2) {
  arr.push.apply(arr, arr2);
}

export function createOptions(arr, selector, index) {
  for (let i = 0; i < arr.length; i++) {
    let option = document.createElement("option");
    if (index !== undefined) {
      option.textContent = arr[i][index];
    } else {
      option.textContent = arr[i];
    }
    selector.appendChild(option);
  }
}
// Some arrays contain arrays, if this is the case, the exact index of the nested arrays can be defined

export function displayItem(val, arr, loc) {
  loc.textContent = "";
  const item = fetchItem(val, arr);
  appendImage(item.img, loc);
  appendData("Name: ", item.name, loc);
  appendData("Type: ", item.type, loc);
  appendData("Base Damage: ", item.baseDamage, loc);
  hasProperty(item, "element", "Element: ", loc);
  hasProperty(item, "effect", "Effect: ", loc);
  hasProperty(item, "buff", "Spell Buff: ", loc);
}

export function fetchItem(val, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === val) {
      return arr[i];
    }
  }
}

export function appendImage(url, loc) {
  let image = document.createElement("img");
  image.setAttribute("src", url);
  loc.appendChild(image);
}

export function appendData(label, data, loc) {
  let div = document.createElement("div");
  let lab = document.createElement("label");
  lab.textContent = label;
  div.appendChild(lab);
  div.append(data);
  loc.appendChild(div);
}

export function appendOption(loc, option) {
  let op = document.createElement("option");
  op.textContent = option;
  loc.appendChild(op);
}

export function appendItem(item, loc) {
  loc.append(item);
}

export function hasProperty(obj, prop, label, loc) {
  if (!obj[prop] || obj[prop] === "None") {
    return;
  }
  if (obj[prop]) {
    appendData(label, obj[prop], loc);
  } else {
    appendData(label, "None", loc);
  }
}

export function isChecked(checkbox) {
  if (checkbox.checked == true) {
    return true;
  } else {
    return false;
  }
}

export function fetchRank(rank) {
  for (let i = 0; i < ranks.length; i++) {
    if (ranks[i][0] === rank) {
      return Number(ranks[i][1]);
    }
  }
}
// Fetches the user's rank and returns the amount of extra damage applied due to that rank

export function createTable(tableId) {
  let table = document.createElement("table");
  table.setAttribute("id", tableId);
  return table;
}

export function getChanceOfSuccess(userRank, spellRank) {
  console.log(userRank, spellRank);
  let num = 7;
  if (userRank === "Civilian") {
    /* console.log(`User rank: ${userRank} | Chance of success: 0 / 8`); */
    return 0;
  }

  let index = ranks.find((rank) => rank[0] === userRank);
  let index2 = ranks.find((rank) => rank[0] === spellRank);

  console.log(index, index2);

  index = Number(index[1]);
  index2 = Number(index2[1]);

  if (index2 <= index) {
    return num;
  }

  while (index2 > index) {
    num--;
    index2--;
  }

  console.log(
    `User rank: ${userRank} | Spell rank: ${spellRank} | Chance of success: ${num} / 8`,
  );
  return num;
}

export function sortByValue(arr, valToBeSorted) {
  let array = [];

  for (let obj of arr) {
    for (let k in obj) {
      if (obj[k] === valToBeSorted) {
        array.push(obj);
      }
    }
  }
  return array;
}

export function summarize(location, summaryId, header) {
  let details = document.createElement("details");
  let summary = document.createElement("summary");
  details.setAttribute("id", summaryId);
  summary.textContent = header;
  details.appendChild(summary);
  location.appendChild(details);
  return summaryId;
}