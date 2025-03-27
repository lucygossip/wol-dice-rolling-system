class ArcaneSpell {
  constructor(name, rank, element, effect) {
    this.name = name;
    this.rank = rank;
    this.element = element;
    this.effect = effect;
  }
}

const arcaneSpells = [
  new ArcaneSpell("Push", 2, "None", "Force of energy to push a target away"),
  new ArcaneSpell(
    "Spike Attack",
    2,
    "None",
    "A basic offensive spell to create thorn-like spikes that shoot at the target.",
  ),
  new ArcaneSpell(
    "Rock Throw",
    3,
    "Earth",
    "Creates or manipulates small rocks to hurl at a target",
  ),
  new ArcaneSpell("Lute Lacerations", 4, "None", "An aggressive spell that uses lute magic to project the sound to inflict physical wounds"),
  new ArcaneSpell("Rods of Binding", 4, "None", "Creates a large rod, which the uer throws at his target. The rod multiplies into many projectiles midway"),
  new ArcaneSpell("Chains", 4, "None", "Creates chains made out of magical energy. It can be made longer and denser or shorter and looser. It can be aimed and targeted at a person or object to bind them"),
  new ArcaneSpell("Sparking Barrage", 5, "None", "Creates a barrage of magical energy, composed of multiple orbs of magic of varying size and distribution"),
  new ArcaneSpell("Slicer Rings", 5, "None", "Creates crescent shaped energy blasts able to cut through objects in their path. These can be released from the limbs or from other objects that serve as an extension of the body"),
  new ArcaneSpell("Guided Energy Blasts", 5, "None", "Creates orbs of magical energy aimed at one target, moved in the direction of the user's will"),
  new ArcaneSpell("Energy Pool", 5, "None", "Creates a giant pool of magical energy, which grows as more people contribute magical energy"),
  new ArcaneSpell("Energy Discharge", 5, "None", "Creates a beam of magical energy that can be created from extremities, limbs or other objects that the user is holding"),
  new ArcaneSpell("Crushing Vacuum", 5, "None", "Creates a circular area around a target that simulates space vacuum"),
  new ArcaneSpell("Bone Manipulation", 5, "None", "Allows the user to manipulate their bones. The bones can be used as projectiles released from the fingertips, or extracted by the user by pushing them. The obtained bone is dense and can be used as a weapon"),
  new ArcaneSpell(
    "Leaves",
    3,
    "Earth",
    "Fast projected leaves that can blind and cut the target",
  ),
  new ArcaneSpell(
    "Vines",
    4,
    "Earth",
    "Conjures of vines to defend the caster or attack a target",
  ),
  new ArcaneSpell(
    "Boulder",
    5,
    "Earth",
    "Creates or manipulates large boulders to throw at a target",
  ),
  new ArcaneSpell(
    "Columns",
    6,
    "Earth",
    "The ability to conjure up large columns of rock or earth",
  ),
  new ArcaneSpell(
    "Landslide",
    7,
    "Earth",
    "A strong spell to loosen earth on a slope and create a flow of mud and rocks",
  ),
  new ArcaneSpell(
    "Earthquake",
    7,
    "Earth",
    "Generates an earthquake of varying magnitude",
  ),
  new ArcaneSpell(
    "Fissure",
    8,
    "Earth",
    "A powerful spell that rips a gorge in the ground",
  ),
  new ArcaneSpell(
    "Air Blast",
    3,
    "Air",
    "A simple blast of wind directed at a target or to push the caster off the ground",
  ),
  new ArcaneSpell(
    "Cutting Wind",
    3,
    "Air",
    "A condensed sharp burst of air that can cut a target",
  ),
  new ArcaneSpell(
    "Minor Vortex",
    4,
    "Air",
    "The ability to create a small swirl of fast moving air",
  ),
  new ArcaneSpell(
    "Gale Force",
    5,
    "Air",
    "A strong force of air magic to push back multiple targets",
  ),
  new ArcaneSpell(
    "Sonic Boom",
    6,
    "Air",
    "A high speed, loud blast of air that can cause severe damage to it’s target",
  ),
  new ArcaneSpell(
    "Tornado",
    7,
    "Air",
    "A weather spell that generates a large, fast moving vortex of air",
  ),
  new ArcaneSpell(
    "Hurricane",
    8,
    "Air",
    "A highly powerful air spell that generates a violent windstorm",
  ),
  new ArcaneSpell(
    "Suffocate",
    8,
    "Air",
    "A potentially fatal spell that removes the air from the lungs of it’s target",
  ),
  new ArcaneSpell(
    "Embers",
    3,
    "Fire",
    "A small spatter of fiery sparks to burn a target",
  ),
  new ArcaneSpell(
    "Flaming Palm",
    3,
    "Fire",
    "A blast of flames produced from the palm of the hand",
  ),
  new ArcaneSpell(
    "Red Handed",
    4,
    "Fire",
    "A burning touch that turns the hands red",
  ),
  new ArcaneSpell(
    "Scorch",
    4,
    "Fire",
    "An intense heat produced with no flames in order to tire an opponent",
  ),
  new ArcaneSpell(
    "Flame Vortex",
    5,
    "Fire",
    "A fiery swirl of fast moving flames, can be used to surround the caster",
  ),
  new ArcaneSpell(
    "Blaze",
    5,
    "Fire",
    "A large blast of flames to burn a target",
  ),
  new ArcaneSpell(
    "Fireball",
    6,
    "Fire",
    "A condensed form of strong fiery magic to project at a target",
  ),
  new ArcaneSpell(
    "Flaming Whip",
    6,
    "Fire",
    "Conjures a thin fiery whip that can inflict harsh attacks",
  ),
  new ArcaneSpell(
    "Inferno",
    7,
    "Fire",
    "A powerful intense blaze that burns everything it touches",
  ),
  new ArcaneSpell(
    "Incinerate",
    8,
    "Fire",
    "Burns the target until reduced to ashes",
  ),
  new ArcaneSpell(
    "Bubble",
    3,
    "Water",
    "The ability to produce bubbles of water",
  ),
  new ArcaneSpell(
    "Aqua Blade",
    3,
    "Water",
    "A narrow projection of water that can cut a target",
  ),
  new ArcaneSpell(
    "Aqua Pulse",
    4,
    "Water",
    "A strong projected pulse of water that can daze the target",
  ),
  new ArcaneSpell(
    "Hydro Jet",
    5,
    "Water",
    "A condensed, forceful blast of water to strike a target",
  ),
  new ArcaneSpell(
    "Whirlpool",
    6,
    "Water",
    "A fast paced, aggressive torrent of swirling water that can trap a target",
  ),
  new ArcaneSpell(
    "Geyser",
    6,
    "Water",
    "An abrupt burst of water that typically can be conjured up from the ground",
  ),
  new ArcaneSpell(
    "Tidal Wave",
    7,
    "Water",
    "A large wave of water hurled towards a target",
  ),
  new ArcaneSpell(
    "Dehydrate",
    8,
    "Water",
    "A potentially fatal spell that can harvest the water of a living creature",
  ),
  new ArcaneSpell(
    "Static",
    3,
    "Lightning",
    "A mild spell to generate a static charge",
  ),
  new ArcaneSpell(
    "Basic Sparks",
    3,
    "Lightning",
    "The ability to conjure up sparks or lightning to hit a target",
  ),
  new ArcaneSpell(
    "Tendrils",
    3,
    "Lightning",
    "A larger ranged spell of lightning tendrils",
  ),
  new ArcaneSpell(
    "Magnetise",
    4,
    "Lightning",
    "The ability to create magnetic energy to pull and push metallic objects",
  ),
  new ArcaneSpell(
    "Bolt",
    5,
    "Lightning",
    "A condensed form of lightning that can be projected at high speed",
  ),
  new ArcaneSpell(
    "Electrical Net",
    6,
    "Lightning",
    "Can form a chain of lightning between multiple targets",
  ),
  new ArcaneSpell(
    "Discharge",
    7,
    "Lightning",
    "A dangerous spell that results in dispelling a large amount of electrical energy",
  ),
  new ArcaneSpell(
    "Thunderstorm",
    7,
    "Lightning",
    "A highly advanced lightning spell to manipulate the weather for targeted lightning strikes",
  ),
  new ArcaneSpell(
    "Spherelectricity",
    8,
    "Lightning",
    "Electrify the earth with lightning, electrocuting anything that comes into contact",
  ),
  new ArcaneSpell(
    "Frost",
    3,
    "Ice",
    "A mild spell to cool the temperature in the area",
  ),
  new ArcaneSpell(
    "Freeze",
    3,
    "Ice",
    "The ability to freeze weaker targets and bodies of water",
  ),
  new ArcaneSpell(
    "Shards",
    4,
    "Ice",
    "Condensed, piercing chunks of ice that can be projected at high speed",
  ),
  new ArcaneSpell(
    "Icicle Spear",
    4,
    "Ice",
    "A large icy spear that can be thrown at a target",
  ),
  new ArcaneSpell(
    "Cold Touch",
    5,
    "Ice",
    "A mere touch will freeze a target instantly",
  ),
  new ArcaneSpell(
    "Hail",
    6,
    "Ice",
    "A spell to create hailstone in a limited area",
  ),
  new ArcaneSpell(
    "Sub Zero",
    7,
    "Ice",
    "A powerful spell to dramatically reduce the temperature, freezing everything in the area",
  ),
  new ArcaneSpell(
    "Blizzard",
    7,
    "Ice",
    "A highly advanced ice spell to manipulate the weather",
  ),
  new ArcaneSpell(
    "Thundra",
    8,
    "Ice",
    "Entirely freeze the area around you, harming others and temporarily resistant to melting",
  ),
  new ArcaneSpell("Lava", 6, "Magma", "The ability to churn out a steady flow of magma across the ground"),
  new ArcaneSpell("Hellstone", 6, "Magma", "Creates molten rocks that can be hurled at a target"),
  new ArcaneSpell("Eruption", 7, "Magma", "A burst of magma brought up from the earth"),
  new ArcaneSpell("Crystal Spear", 6, "Crystal", "A crystalline spear that can be projected at a target"),
  new ArcaneSpell("Crystal Blade", 6, "Crystal", "Conjures a crystalline blade to slice at the target"),
  new ArcaneSpell("Crystallize", 7, "Crystal", "Grows crystals around the limbs of an opponent, piercing their skin"),
  new ArcaneSpell("Blind", 6, "Sand", "A dash of sand thrown at the target to blind them"),
  new ArcaneSpell("Sandstorm", 7, "Sand", "A large wave of sand pushed towards the target"),
  new ArcaneSpell("Dune Shift", 7, "Sand", "Creates an obstructive wall of sand, smothering the target"),
  new ArcaneSpell("Disintegrate", 8, "Sand", "A powerful spell to turn the target into sand"),
  new ArcaneSpell("Basic Light", 2, "Light", "Creates an orb of light to improve visibility"),
  new ArcaneSpell("Lightforce", 4, "Light", "Blasts a light beam at a target"),
  new ArcaneSpell("Radiance", 5, "Light", "Produces a light that envelopes the caster and harms nearby enemies"),
  new ArcaneSpell("Aura of Solis", 6, "Light", "Generates a bright sunlight that only harms undead"),
  new ArcaneSpell("Arrow of Helios", 6, "Light", "Generates a bright sunlight arrow to project at a target"),
  new ArcaneSpell("Moonbeam", 8, "Light", "Creates a concentrated form of moonlight to harm a target"),
];

let damage = 14;

for (let spell of arcaneSpells) {
  let rank = spell.rank;
  let buff = Number(rank) - 2;
  spell.damage = damage + buff;
}

export default arcaneSpells;