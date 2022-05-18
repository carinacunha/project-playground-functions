// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let sum1 = lineA + lineB;
  let sum2 = lineA + lineC;
  let sum3 = lineB + lineC;

  if (lineA < sum3 && lineA > Math.abs(lineB - lineC)){
    return true;
  }
  else if (lineB < sum2 && lineB > Math.abs(lineA - lineC)){
    return true;
  }
  else if (lineC < sum1 && lineC > Math.abs(lineA - lineB)){
    return true;
  }
  else{
    return false;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
