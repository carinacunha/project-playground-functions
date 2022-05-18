// Desafio 1
function compareTrue(first, second) {
  // seu código aqui
  if (first && second === true) {
    return true;
  };
  return false;
};

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(array) {
  // seu código aqui
  return array.split(' ');
};

// Desafio 4
function concatName(array) {
  // seu código aqui
  let firstString = array[0];
  let lastString = array.pop();
  let string = lastString +', '+ firstString;

  return string;
};

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sum = (wins * 3) + (ties * 1);
  return sum;
};

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let biggest;
  let countBiggest = 0;
  for(index = 0; index < array.length; index += 1) {
    let biggest = Math.max(array[index], array[index + 1]);
       
  };
  
  for(index = 0; index <= array.length; index += 1) {
    if(array[index] === biggest){
        countBiggest += 1;
    };
  };
 return countBiggest;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  //seu código aqui

  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if(distance1 < distance2){
    return 'cat1'
  }
  if(distance2 < distance1){
    return 'cat2'
  }
  if(distance2 === distance1){
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui

  let three = [];
  let five = [];
  let result = [];

  for(key in array){
    if (array[key] % 3 === 0 && array[key] % 5 !== 0) {
      three.push(array[key] / 3);
      result.push('fizz');
    }
    else if (array[key] % 5 === 0 && array[key] % 3 !== 0) {
      five.push(array[key] / 5);
      result.push('buzz');
    }
    else if (array[key] % 5 === 0 && array[key] % 3 === 0) {
      five.push(array[key] / 5);
      three.push(array[key] / 3);
      result.push('fizzBuzz');
    }
    else{
      result.push('bug!');
    }  
  }
    return result;
  }

// Desafio 9
function encode(string) {
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
