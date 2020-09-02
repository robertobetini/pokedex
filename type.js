class Type {
  
  constructor(name) {
    this.name = name;
    this.mult = {};
  }
  
  dualTypeMult(typeA, typeB) {
    if(typeB == undefined) {
       return this.mult[typeA];
    }
    return this.mult[typeA] * this.mult[typeB];
  }
  
}

var types = [];
const typeNames = ["normal", "fire", "water", "electric", "grass", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dragon", "dark", "steel", "fairy"];

for(let i = 0; i < typeNames.length; i++) {
  types[i] = new Type(typeNames[i]);
  for(let name of typeNames) {
    types[i].mult[name] = 1;
  }
}
  
// when an attack is strong against a certain type, the multiplier should be doubled, and when it's weak agains certain type, the multiplier should be halved
  
let n = 0;
// normal moves
types[n].mult.rock /= 2;
types[n].mult.ghost = 0;
types[n].mult.steel /= 2;
n++;
// fire moves
types[n].mult.fire /= 2;
types[n].mult.water /= 2;
types[n].mult.grass *= 2;
types[n].mult.ice *= 2;
types[n].mult.bug *= 2;
types[n].mult.rock /= 2;
types[n].mult.dragon /= 2;
types[n].mult.steel *= 2;
n++;
// water moves
types[n].mult.fire *= 2;
types[n].mult.water /= 2;
types[n].mult.grass /= 2;
types[n].mult.ground *= 2;
types[n].mult.rock *= 2;
types[n].mult.dragon /= 2;
n++;
// electric moves
types[n].mult.water *= 2;
types[n].mult.electric /= 2;
types[n].mult.grass /= 2;
types[n].mult.ground = 0;
types[n].mult.flying *= 2;
types[n].mult.dragon /= 2;
n++;
// grass moves
types[n].mult.fire /= 2;
types[n].mult.water *= 2;
types[n].mult.grass /= 2;
types[n].mult.poison /= 2;
types[n].mult.ground *= 2;
types[n].mult.flying /= 2;
types[n].mult.bug /= 2;
types[n].mult.rock *= 2;
types[n].mult.dragon /= 2;
types[n].mult.steel /= 2;
n++;
// ice moves
types[n].mult.fire /= 2;
types[n].mult.water /= 2;
types[n].mult.grass *= 2;
types[n].mult.ice /= 2;
types[n].mult.ground *= 2;
types[n].mult.flying *= 2;
types[n].mult.dragon *= 2;
types[n].mult.steel /= 2;
n++;
// fighting moves
types[n].mult.normal *= 2;
types[n].mult.ice *= 2;
types[n].mult.poison /= 2;
types[n].mult.flying /= 2;
types[n].mult.psychic /= 2;
types[n].mult.bug /= 2;
types[n].mult.rock *= 2;
types[n].mult.ghost = 0;
types[n].mult.dark *= 2;
types[n].mult.steel *= 2;
types[n].mult.fairy /= 2;
n++;
// poison moves
types[n].mult.grass *= 2;
types[n].mult.poison /= 2;
types[n].mult.ground /= 2;
types[n].mult.rock /= 2;
types[n].mult.ghost /= 2;
types[n].mult.steel = 0;
types[n].mult.fairy *= 2;
n++;
// ground moves
types[n].mult.fire *= 2;
types[n].mult.electric *= 2;
types[n].mult.grass /= 2;
types[n].mult.poison *= 2;
types[n].mult.flying = 0;
types[n].mult.bug /= 2;
types[n].mult.rock *= 2;
types[n].mult.steel *= 2;
n++;
// flying moves
types[n].mult.electric /= 2;
types[n].mult.grass *= 2;
types[n].mult.fighting *= 2;
types[n].mult.bug *= 2;
types[n].mult.rock /= 2;
types[n].mult.steel /= 2;
n++;
// psychic moves
types[n].mult.fighting *= 2;
types[n].mult.poison *= 2;
types[n].mult.psychic /= 2;
types[n].mult.dark = 0;
types[n].mult.steel /= 2;
n++;
// bug moves
types[n].mult.fire /= 2;
types[n].mult.grass *= 2;
types[n].mult.fighting /= 2;
types[n].mult.poison /= 2;
types[n].mult.flying /= 2;
types[n].mult.psychic *= 2;
types[n].mult.ghost /= 2;
types[n].mult.dark *= 2;
types[n].mult.steel /= 2;
types[n].mult.fairy /= 2;
n++;
// rock moves
types[n].mult.fire *= 2;
types[n].mult.ice *= 2;
types[n].mult.fighting /= 2;
types[n].mult.ground /= 2;
types[n].mult.flying *= 2;
types[n].mult.bug *= 2;
types[n].mult.steel /= 2;
n++;
// ghost moves
types[n].mult.normal = 0;
types[n].mult.psychic *= 2;
types[n].mult.ghost *= 2;
types[n].mult.dark /= 2;
n++;
// dragon moves
types[n].mult.dragon *= 2;
types[n].mult.steel /= 2;
types[n].mult.fairy = 0;
n++;
// dark moves
types[n].mult.fighting /= 2;
types[n].mult.psychic *= 2;
types[n].mult.ghost *= 2;
types[n].mult.dark /= 2;
types[n].mult.fairy /= 2;
n++;
// steel moves
types[n].mult.fire /= 2;
types[n].mult.water /= 2;
types[n].mult.electric /= 2;
types[n].mult.ice *= 2;
types[n].mult.rock *= 2;
types[n].mult.steel /= 2;
types[n].mult.fairy *= 2;
n++;
// fairy moves
types[n].mult.fire /= 2;
types[n].mult.fighting *= 2;
types[n].mult.poison /= 2;
types[n].mult.dragon *= 2;
types[n].mult.dark *= 2;
types[n].mult.steel /= 2;