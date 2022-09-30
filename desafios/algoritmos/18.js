//Operação sum

const array = [1, 2, 3];
const sum = array.reduce((addition, value) => addition + value, 0);
console.log(sum);

const array2 = [2, 2, 2];
const sum2 = array2.reduce((addition, value) => addition + value, 0);
console.log(sum2);

const array3 = [1, 2, 3, 4, 5, 6];
const sum3 = array3.reduce((addition, value) => addition + value, 0);
console.log(sum3);

//Operação sumOdds

const sumOdds = array.filter((value) => value % 2 !== 0);
console.log(sumOdds.reduce((addition, value) => addition + value));

const sumOdds2 = array2.filter((value) => value % 2 !== 0);
console.log(sumOdds2.reduce((addition, value) => addition + value, 0));

const sumOdds3 = array3.filter((value) => value % 2 !== 0);
console.log(sumOdds3.reduce((addition, value) => addition + value));

//Operação product

console.log(array.reduce((addition, value) => addition * value));

console.log(array2.reduce((addition, value) => addition * value));

console.log(array3.reduce((addition, value) => addition * value));