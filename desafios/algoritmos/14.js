function isPrime(number) {
  // for(let i = 2; i < number; i++)
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) if (number % i === 0) return false;
  return number !== 1;
}

function nthPrime(nth) {
  let result = 2;

  for (let number = 3, count = 1; count < nth; number++) {
    if (isPrime(number)) {
      result = number;
      count++;
    }
  }

  return result;
}

console.log(nthPrime(4));
console.log(nthPrime(6));