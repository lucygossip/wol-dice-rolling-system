import { ranks } from "../globals/ranksObject.mjs";

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
