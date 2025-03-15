export function validateDamage(item, category, isStatic) {
  let diceRangeData = [];
  category = category.toString();
  if (item === 0) {
    return 0;
  } else if (isStatic === true) {
    return 1;
  } else {
    return 2;
  }
}

export function validateCertificates(cat, weap) {
  let category = document.getElementById(cat);
  if (category.checked == true && weap.cat === cat) {
    return 1;
  } else {
    return 0;
  }
}
