function factorial(number) {
  if (number) return number * factorial(number - 1);
  else return 1;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));