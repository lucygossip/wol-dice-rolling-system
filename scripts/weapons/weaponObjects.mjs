import { pushArray } from "../functions/helperFunctions.mjs";

class Weapon {
  constructor(name, cat, type, baseDamage, img) {
    this.name = name;
    this.cat = cat;
    this.type = type;
    this.baseDamage = baseDamage;
    this.img = img;
  }
}

class StatusWeapon extends Weapon {
  constructor(name, cat, type, baseDamage, img, element, effect) {
    super(name, cat, type, baseDamage, img);
    this.element = element;
    this.effect = effect;
  }
}

class Staff extends StatusWeapon {
  constructor(name, cat, type, baseDamage, img, element, effect, buff) {
    super(name, cat, type, baseDamage, img, element, effect);
    this.buff = buff;
  }
}

export const weapons = [];

export const standardWeapons = [
  new Weapon(
    "Unarmed",
    "",
    "One Handed",
    5,
    "https://img.worldofpotter.eu/wol/img/smileys/php1PWVv5_5d114582e9ebd3_30369141.png",
  ),
  new Weapon(
    "Cutlass",
    "melee",
    "One Handed",
    9,
    "https://img.worldofpotter.eu/wol/img/shops/items/phpTJP1Ap_5d781caf15b8f9_48269773.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon("Diamond Pickaxe", "One Handed", 8),
  new Weapon(
    "Gladius",
    "melee",
    "One Handed",
    8,
    "https://img.worldofpotter.eu/wol/img/shops/items/phpU4KfML_5d7671251dafe4_90204950.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Hunting Knife",
    "melee",
    "One Handed",
    6,
    "https://img.worldofpotter.eu/wol/img/shops/items/phpOAetkd_5d59656f020298_97033112.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Iron Pickaxe",
    "melee",
    "One Handed",
    7,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpMXkR29_607eaf9ca9aa20_42731105.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Mace",
    "melee",
    "One Handed",
    8,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpC1K7wq_5f5f58c08bc669_01370468.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Morning Star",
    "melee",
    "One Handed",
    7,
    "https://img.worldofpotter.eu/wol/img/shops/items/php8Aa66e_5e6abb2246acd7_82143963.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Push Dagger",
    "melee",
    "One Handed",
    6,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpfJlkel_64c80f01459e74_42847140.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Rapier",
    "melee",
    "One Handed",
    8,
    "https://img.worldofpotter.eu/wol/img/shops/items/phpiVxia6_5d6ea2447db001_20323737.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Small Axe",
    "melee",
    "One Handed",
    7,
    "https://img.worldofpotter.eu/wol/img/shops/items/phpHO1Xwz_5e8ca0cacc4334_93153179.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Small Dagger",
    "melee",
    "One Handed",
    7,
    "https://img.worldofpotter.eu/wol/img/shops/items/phpOEbO93_5e2308186677d2_46500154.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Smithing Hammer",
    "melee",
    "One Handed",
    6,
    "https://img.worldofpotter.eu/wol/img/shops/items/php8wLE31_5d59665314ad84_13425158.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Standard Crossbow",
    "archery",
    "One Handed",
    6,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/php0m6WWX_63af2cbd3a7b09_57525644.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Longbow",
    "archery",
    "Two Handed",
    14,
    "https://img.worldofpotter.eu/wol/img/shops/items/phpqno0pK_5dbf11571a6546_10315305.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Naginata",
    "melee",
    "Two Handed",
    16,
    "https://img.worldofpotter.eu/wol/img/shops/items/phpenT1Ti_5e24dc33da3b29_75393933.png?version=NDKdLxH1yX&width=350",
  ),
  new Weapon(
    "Scythe",
    "melee",
    "Two Handed",
    15,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpTwWCMY_607eae7f273b09_09863962.png?version=NDKdLxH1yX&width=350",
  ),
];

standardWeapons[0].effect =
  "With Orc Kin status, each successful consecutive punch gains +2 per swing. Resets upon miss.";

export const statusWeapons = [
  new StatusWeapon(
    "Chain Reaction",
    "",
    "One Handed",
    8,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpgAhDim_673ddb32f3e683_04929671.png?version=NDKdLxH1yX&width=350",
    ["Crystal", "Light"],
    "Weapon gains +2 lightning damage when used in conjunction with a lightning spell in the same turn",
  ),
  new StatusWeapon(
    "Cursed Dagger",
    "melee",
    "One Handed",
    12,
    "https://img.worldofpotter.eu/wol/img/shops/items/phpynGpkp_5db0c253ae2943_11559392.png?version=NDKdLxH1yX&width=350",
    "Dark",
    "Upon each successful hit, the wielder takes +1 damage in exchange",
  ),
  new StatusWeapon(
    "Hot Shot",
    "",
    "One Handed",
    35,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpP9xMR6_6747ad193543e2_06048691.png?version=NDKdLxH1yX&width=350",
    "Fire",
    "Weapon is inactive for two turns while it charges. Guaranteed maximum damage on the third turn",
  ),
  new StatusWeapon(
    "Ivella Ro Cinys",
    "",
    "One Handed",
    7,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpyeWBAZ_6772bc3c4016a4_99878958.png?version=NDKdLxH1yX&width=350",
    ["Crystal", "Light"],
    "Nullifies all Dark effects from one specified opponent",
  ),
  new StatusWeapon(
    "Ocean's Razor",
    "melee",
    "One Handed",
    7,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phps52KaN_63b894cc15f171_78163619.png?version=NDKdLxH1yX&width=350",
    "Water",
    "Weapon gains +2 to all attacks if used underwater",
  ),
  new StatusWeapon(
    "Ray Gun",
    "",
    "One Handed",
    10,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpPejLLF_6745a4a3e5cb20_85063032.png?version=NDKdLxH1yX&width=350",
    "Light",
    "This weapon is immune to all dice roll reduction effects",
  ),
  new StatusWeapon(
    "The Last Barrage",
    "melee",
    "One Handed",
    50,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpyfan1a_65b3e605259c64_39787299.png?version=NDKdLxH1yX&width=350",
    ["Air", "Earth"],
    "Can only be used once per encounter due to having to reassemble",
  ),
  new StatusWeapon(
    "Valikal Steamblade",
    "melee",
    "One Handed",
    9,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpvoM1LL_622c66f9d020c0_94833437.png?version=NDKdLxH1yX&width=350",
    "Fire",
    "Target gets +4 points of burning damage per round, until they faint or the encounter ends",
  ),
  new StatusWeapon(
    "Witchblade",
    "melee",
    "One Handed",
    8,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpbKlDgn_64d131f2f27b51_45657207.png?version=NDKdLxH1yX&width=350",
    ["Dark", "Earth"],
    "Target is poisoned and loses 2hp per round. Target's attacks are 1 point weaker in every subsequent round. This does not stack. The effect ends at the end of the fight",
  ),
  new StatusWeapon(
    "Adez K'Orgaz",
    "melee",
    "Two Handed",
    17,
    "https://img.worldofpotter.eu/wol/img/shops/items/phpEVnyzE_5d9f9d031b69f0_17019158.png?version=NDKdLxH1yX&width=350",
    ["Dark", "Earth"],
    "For every successful attack, it gains +2 damage. Maximum +10. Resets after every fight",
  ),
  new StatusWeapon(
    "Airi's Windfall",
    "archery",
    "Two Handed",
    14,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpaQyhuW_65b3f01068e762_75209472.png?version=NDKdLxH1yX&width=350",
    "Air",
    "Damage gets split between the number of enemies on the field",
  ),
  new StatusWeapon(
    "Dual Nephrite Daggers",
    "melee",
    "Two Handed",
    14,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpXcxMeD_622b3a8a2ec908_89379500.png?version=NDKdLxH1yX&width=350",
    "Dark",
    "Negates all of the opponent's armour",
  ),
  new StatusWeapon(
    "Ender Bow",
    "archery",
    "Two Handed",
    15,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phphfEJMo_649f22b35b6838_53295182.png?version=NDKdLxH1yX&width=350",
    ["Dark", "Lightning"],
    "Attack twice in the same round",
  ),
  new StatusWeapon(
    "Mir'Tyela",
    "archery",
    "Two Handed",
    16,
    "https://img.worldofpotter.eu/wol/img/shops/items/phpKEHP75_5d9f9f56355d15_97943784.png?version=NDKdLxH1yX&width=350",
    ["Air", "Light"],
    "Adds +2 damage increase per round for up to 4 rounds. This damage stacks",
  ),
  new StatusWeapon(
    "The Rain Bow",
    "archery",
    "Two Handed",
    14,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpBPfaMk_63e2b0bdee4937_02486904.png?version=NDKdLxH1yX&width=350",
    "Water",
    "Rains a shower of arrows that attacks multiple targets (maximum 3). Targets must be specified",
  ),
];

statusWeapons[2].static = true;
statusWeapons[6].static = true;

export const staffs = [
  new Staff(
    "Apprentice's Staff",
    "arcane",
    "One Handed",
    0,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpZajgY8_601a939aee30f8_12831810.png?version=NDKdLxH1yX&width=350",
    "None",
    "None",
    2,
  ),
  new Staff(
    "Shaman's Staff",
    "arcane",
    "One Handed",
    0,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpOlSsbf_607f304ed66886_78527119.png?version=NDKdLxH1yX&width=350",
    "None",
    "None",
    1,
  ),
  new Staff(
    "The Aspergil",
    "arcane",
    "One Handed",
    0,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpfmgPST_63b899ae566423_90859211.png?version=NDKdLxH1yX&width=350",
    "Water",
    "Water based magic attacks gain +6 damage while Aspergil is equipped",
    2,
  ),
  new Staff(
    "Eykirris",
    "arcane",
    "One Handed",
    0,
    "https://img.worldofpotter.eu/wol/img/shops/items/phpLX2wqp_5d9f9e1b6e5737_55426008.png?version=NDKdLxH1yX&width=350",
    "All",
    "Elemental spells get +3 damage. +5 if the user is a therian",
    2,
  ),
  new Staff(
    "Hellraiser",
    "arcane",
    "One Handed",
    0,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpDIiNhB_64e0da9f7f3386_50542175.png",
    ["Dark", "Fire"],
    "Hellraiser rolls a 1d100, and if a 100 is rolled, it is an insta-kill.",
    5,
  ),
  new Staff(
    "Tide Turner",
    "arcane",
    "One Handed",
    0,
    "https://img.worldofpotter.eu/wol/img/uploads/shop/items/phpLJkOFA_673f030e710e87_15782417.png",
    ["Crystal", "Light"],
    `✦ Plot Effect 1: All water-based attacks incur a debuff of -4
  ✦ Plot Effect 2: All water-based Divine Favours/Status holders incur a health debuff of 12 at the start of the encounter
  These effects stack`,
    2,
  ),
];

pushArray(weapons, standardWeapons);
pushArray(weapons, statusWeapons);
pushArray(weapons, staffs);