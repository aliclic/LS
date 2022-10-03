function triangleChecker(a, b, c) {
  if (a < (b + c) && b < (a + c) && c < (a + b)) {
    if (a == b && b == c) {
      return "equilateral";
    } else if (a == b || a == c || c == b) {
      return "isosceles";
    } else {
      return "scalene";
    }
  } else {
    return "none"
  }
}

console.log(triangleChecker(2,2,2));
console.log(triangleChecker(10,10,10));
console.log(triangleChecker(3,4,4));
console.log(triangleChecker(4,3,4));
console.log(triangleChecker(4,4,3));
console.log(triangleChecker(10,10,2));
console.log(triangleChecker(3,4,5));
console.log(triangleChecker(10,11,12));
console.log(triangleChecker(5,4,2));
console.log(triangleChecker(0,0,0));
console.log(triangleChecker(3,4,-5));
console.log(triangleChecker(1,1,3));
console.log(triangleChecker(2,4,2));