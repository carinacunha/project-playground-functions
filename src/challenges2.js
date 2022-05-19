// Desafio 11
function generatePhoneNumber(array) {
  // Definir variáveis auxiliares
  let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let result;

  // Testes das entradas
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.'
  }

  for (value of array){
    if (value < 0 || value > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    counts[value] = counts[value] + 1;
  }

  for(value of counts){
    if (value >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  //Formatação dos números
  result = "("+ array.slice(0,2).join('') + ") " + array.slice(2,7).join('') + "-" + array.slice(7,11).join('');
  return result;
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
// seu código aqui
  let sum1 = lineA + lineB;
  let sum2 = lineA + lineC;
  let sum3 = lineB + lineC;

  if (lineA < sum3 && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  else if (lineB < sum2 && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  else if (lineC < sum1 && lineC > Math.abs(lineA - lineB)) {
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
