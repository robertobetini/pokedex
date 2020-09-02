let txt;
let pokemons = [];
let selected, img;

function preload() {
  txt = loadStrings("pokemon.csv");
}

function setup() {
  createCanvas(500, 600);
  for(let i = 0; i < txt.length; i++) {
    txt[i] = txt[i].split(";");
    txt[i][3] = txt[i][3].split("/");
    txt[i][4] = txt[i][4].split("&");
    for(let j = 0; j < txt[i][4].length; j++) {
      txt[i][4][j] = txt[i][4][j].split("/");
    }
  }
  //each line should be like:
  console.log(txt[0]);
  for(let i = 1; i < txt.length; i++) {
    let evolutions = [];
    for(let j = 0; j < txt[i][4].length; j++) {
      let name = txt[i][4][j][0];
      let info = txt[i][4][j][1];
      let evo = new Evolution(name, info);
      evolutions.push(evo);
    }
    let path = nameToPath(txt[i][1]);
    let pokemon = new Pokemon(txt[i][0], txt[i][1], txt[i][2], txt[i][3], path, evolutions);
    pokemons.push(pokemon);
  }
}

function draw() {
  background(0);
  if(selected) {
    image(img, 0, 0);
  }
}

function nameToPath(str) {
  let path = "img/";
  let end = ".png";
  for(let i = 0; i < str.length; i++) {
    if(str[i] == "'" || str[i] == "." || str[i] == " " || str[i] == ":") {
      path += "-";
    } else {
      path += str[i].toLowerCase();
    }
  }
  return path + end;
}