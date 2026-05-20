class Armour {
  constructor(img, name, type, defence) {
    this.img = img;
    this.name = name;
    this.type = type;
    this.defence = defence;   
  }
}

class StatusArmour {
  constructor(img, name, element, type, defence, effect) {
    this.img = img;
    this.name = name;
    this.element = element;
    this.type = type;
    this.defence = defence;
    this.effect = effect;
  }
}

export const armour = [
    new Armour("Smithing Glove", "Glove", "3", "", "Description")
]

export const statusArmour = [
    new StatusArmour("https://img.worldofpotter.eu/wol/img/uploads/shop/items/php9rtEwx_609275b46fe061_00635714.webp?version=NWYnQ4MHcs&width=350", "Cloak of Tenebria", "Dark", "Cloak", 8, "Lessens the chance of you getting hit by 1 specified target each round, or reduces damage to you if hit. (-1 from the specified target's dice roll)"),
    new StatusArmour("https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpmnpDEf_6733454e6527c6_74249651.webp?version=NWYnQ4MHcs&width=325", "Elder Ring", "Earth", "Hand", 0, "-5 damage taken from all Earth and Water spells (defence: 0)"),
    new StatusArmour("https://img.worldofpotter.eu/wol/img/uploads/images/9c6249f6-da84-43b7-9463-98f0b38f88a5.webp?version=NWYnQ4MHcs&width=325", "Escher Goggles", "Lightning", "Head", 5, "All lightning based spells/weaponry gain a +2 damage"),
    new StatusArmour("https://img.worldofpotter.eu/wol/img/uploads/shop/items/php0UToRb_65b3f2cf128ec2_66653616.webp?version=NWYnQ4MHcs&width=325", "Evergreen's Crown", "Earth", "Head", 3, "Deals -1 to all rolls performed by flora or fauna opponents"),
    new StatusArmour("https://img.worldofpotter.eu/wol/img/uploads/images/ae33348f-f027-4329-95df-8b5265bf420f.webp?version=NWYnQ4MHcs&width=325", "Mask of Aristotle", "Dark/Fire", "Head", 7, "All air related abilities, spells and effects incur a -1 dice roll"),
    new StatusArmour("https://img.worldofpotter.eu/wol/img/uploads/images/a50bfb4b-4aee-4a20-8dc0-e64361d67bdf.webp?version=NWYnQ4MHcs&width=325", "Mask of Pythagoras", "Fire", "Head", 8, "Stroke of Genius' - Each round, a coin is flipped. A staff may be granted a guaranteed hit; a weapon may be granted maximum damage output."),
    new StatusArmour("https://img.worldofpotter.eu/wol/img/uploads/images/e5fce99e-7d8c-436a-891d-8f1e1375abc1.webp?version=NWYnQ4MHcs&width=325", "Mask of Socrates", "Dark", "Head", 6, "All regenerative abilities, spells and effects cannot be accessed on the battlefield"),
    new StatusArmour("https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpUg212m_63b8986f69ba47_00230791.webp?version=NWYnQ4MHcs&width=350", "The Griptide", "Water", "Glove", 6, "+2 defence if you are a Waterbearer")
]