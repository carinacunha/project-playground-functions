// Desafio 1
function compareTrue(first, second) {
  // seu código aqui
  if (first && second === true) {
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
  let firstString = array[0];
  let lastString = array.pop();
  let string = `${lastString}, ${firstString}`;

  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sum = (wins * 3) + (ties * 1);
  return sum;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui

  let biggest = Math.max.apply(null, array);
  let countBiggest = 0;

  for (let index = 0; index <= array.length; index += 1) {
    if (array[index] === biggest) {
      countBiggest += 1;
    }
  }
  return countBiggest;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
// seu código aqui

  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance2 < distance1) {
    return 'cat2';
  }
  if (distance2 === distance1) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
// seu código aqui
  let three = [];
  let five = [];
  let result = [];

  for (let key in array) {
    if (array[key] % 3 === 0 && array[key] % 5 !== 0) {
      three.push(array[key] / 3);
      result.push('fizz');
    } else if (array[key] % 5 === 0 && array[key] % 3 !== 0) {
      five.push(array[key] / 5);
      result.push('buzz');
    } else if (array[key] % 5 === 0 && array[key] % 3 === 0) {
      five.push(array[key] / 5);
      three.push(array[key] / 3);
      result.push('fizzBuzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(words) {
  // seu código aqui
  let wordsEncode = words.split('');

  for (let i = 0; i < words.length; i += 1) {
    if (wordsEncode[i] === 'a') {
      wordsEncode[i] = '1';
    } else if (wordsEncode[i] === 'e') {
      wordsEncode[i] = '2';
    } else if (wordsEncode[i] === 'i') {
      wordsEncode[i] = '3';
    } else if (wordsEncode[i] === 'o') {
      wordsEncode[i] = '4';
    } else if (wordsEncode[i] === 'u') {
      wordsEncode[i] = '5';
    }
  }
  wordsEncode = wordsEncode.join('');
  return wordsEncode;
}

function decode(words) {
  // seu código aqui

  let wordsDecode = words.split('');

  for (let i = 0; i < words.length; i += 1) {
    if (wordsDecode[i] === '1') {
      wordsDecode[i] = 'a';
    } else if (wordsDecode[i] === '2') {
      wordsDecode[i] = 'e';
    } else if (wordsDecode[i] === '3') {
      wordsDecode[i] = 'i';
    } else if (wordsDecode[i] === '4') {
      wordsDecode[i] = 'o';
    } else if (wordsDecode[i] === '5') {
      wordsDecode[i] = 'u';
    }
  }
  wordsDecode = wordsDecode.join('');
  return wordsDecode;
}

// Desafio 10
function techList(array, string) {
  // seu código aqui

  let results = [];
  let item;

  array = array.sort();

  if (array.length === 0 || string === null) {
    return 'Vazio!';
  }

  for (value of array) {
    item = {
      tech: value,
      name: string,
    };
    results.push(item);
  }
  return results;
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
