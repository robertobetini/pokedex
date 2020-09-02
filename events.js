let input = document.getElementById('in');
const desired = "abcdefghijklmnopqrstuvwxyz";

input.oninput = ()=> {
  let p = input.value.toLowerCase();
  let guess;
  let found = false;
  let old = selected;
  console.log(p);
  for(let pokemon of pokemons) {
    if(pokemon.name.toLowerCase() == p || pokemon.id == p) {
      selected = pokemon;
      found = true;
      break;
    } else {
      if(!guess) {
        guess = pokemon;
      } else {
        let oldScore = getScore(guess.name, p);
        let newScore = getScore(pokemon.name, p);
        if(newScore > oldScore) {
          guess = pokemon;
        }
      }
    }
  }
  if(found == false) {
    selected = guess;
  }
  if(selected != old) {
    img = loadImage(selected.path);
    console.log(selected);
    console.log(selected.findMultipliers());
  }
}

function removeChars(str, charStr) {
  let newStr = "";
  for(let char of str) {
    if(!charStr.includes(char)) {
      newStr += char;
    }
  }
  return newStr;
}

function getScore(target, guess) {
  let score = 0;
  let shorter = target;
  if(target.length > guess.length) {
    shorter = guess;
  }
  for(let i = 0; i < shorter.length; i++) {
    let char = guess[i];
    if(target.includes(char)) {
      if(target[i] == guess[i]) {
        score += 3;
      } else {
        score++;
      }
    }
  }
  return score;
}