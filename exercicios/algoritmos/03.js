// Séries Numéricas

//De 00 até 99 agrupados de 10 em 10
let result = '';

for (let number = 0; number <= 99; number += 1) {
  const whiteSpace = number % 10 === 9 ? '\n' : ' ';
  const value = number < 10 ? `0${number}` : number;
  result += value + whiteSpace;
}

console.log(result);

//De 99 até 00 agrupados de 10 em 10
/*let result = '';

for (let number = 99; number >= 0; number -= 1) {
  const whiteSpace = number % 10 ? ' ' : '\n';
  const value = number < 10 ? `0${number}` : number;
  result += value + whiteSpace;
}

console.log(result);

//Ímpares de 99 até 00 agrupados de 5 em 5
let result = '';

for (let number = 99; number >= 0; number -= 2) {
  const whiteSpace = number % 10 === 1 ? '\n' : ' ';
  const value = number < 10 ? `0${number}` : number;
  result += value + whiteSpace;
}

console.log(result); */