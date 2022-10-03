function isPrime(number) {
  // for(let i = 2; i < number; i++)
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) if (number % i === 0) return false;
  return number !== 1;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));

export { isPrime };
