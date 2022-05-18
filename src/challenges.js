// Desafio 1
function compareTrue(first, second) {
  // seu código aqui
  if(first && second == true){
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(array) {
  // seu código aqui
  return array.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  firstString = array[0];
  lastString = array.pop();
  string = lastString +', '+ firstString;

  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sum = (wins * 3) + (ties * 1);
  return sum;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2){
  //seu código aqui

  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if(distance1 < distance2){
    return 'cat1'
  }
  else if(distance2 < distance1){
    return 'cat2'
  }

  else if(distance2 === distance1){
    return 'os gatos trombam e o rato foge'
  }
}


// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
