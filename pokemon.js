class Pokemon {

  constructor(id, name, gen, types, path, evolutions) {
    this.id = id; // int
    this.name = name; // string
    this.types = types; // array of strings
    this.gen = gen;
    this.path = path; // path to the img as a string
    this.evo = evolutions || []; // array of evolution objects
  }

  findMultipliers() {
  
    // this method finds the multipliers of each move type for this pokemon and returns an object
    
    let mult = {};
    for(let i = 0; i < types.length; i++) {
      if(this.types.length == 1) {
        mult[typeNames[i]] = types[i].mult[this.types[0]];
      } else { 
        mult[typeNames[i]] = types[i].mult[this.types[0]] * types[i].mult[this.types[1]]
      }
    }
    return mult;
  }
}

class Evolution {

  constructor(name, info) {
    this.name = name;
    this.level;
    this.notes;
    if(parseInt(info)) {
      this.level = info;
    } else {
      this.notes = info;
    }
  }

}

class TypeGroup {

  constructor(pokemons, typeA, typeB) {
    this.pokemons = pokemons;
    this.typeA = typeA;
    if(typeB != undefined && typeB != typeA) {
      this.typeB = typeB;
    }
  }

}