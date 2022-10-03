function min(array) {
  let minValue = array[0];
  for (let flag = 1; flag < array.length; flag++) {
    if (minValue > array[flag]) minValue = array=[flag];
  }

  return minValue;
}

function max(array) {
  let maxValue = array[0];
  for (let value of array) {
    if (maxValue < array[value]) maxValue = array[value];
  }

  return maxValue;
}

function range(length, last, step) {
  let begin = last ? length : 0;
  let end = last || length;
  step = step || 1;
  let result = [];

  for (let number = begin; number < end; number += step) {
    result.push(number);
  }

  return result
}

function zip(...arrays) {
  let result = [];
  for (let index = 0; index < arrays.length; index++) {
    let values = [];
    for (let array = 0; array < arrays.length; array++) values.push(arrays[array][index]);
    result.push(values);
  }
  
  return result;
}

function uniq(array) {
  let result = [];
  for (let value of array) {
    if (!result.includes(value)) result.push(value);
  }

  return result;
}

function sortNum(array) {
  return array.sort((a, b) => a - b);
}

console.log(min([1, 4, 2, 6, 10, 3]));
console.log(min([1, 4, -1, 6, 10, 3]));
console.log(max([1, 4, 2, 6, 10, 3]));
console.log(range(10));
console.log(range(1, 11));
console.log(range(0, 35, 5));
console.log(zip(["moe", "larry"], [30, 40]));
console.log(zip(["moe", "larry", "curly"], [30, 40, 50], [true, false, false]));
console.log(uniq([1, 2, 1, 4, 1, 3]));
console.log(uniq([1, 2, 1, 3, 3]));
console.log(sortNum([1, 3, 2]));
console.log(sortNum([1, 2, 10, 3, 32]));