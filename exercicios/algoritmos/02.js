// IMC = WEIGTH / HEIGHT ** 2

let weight = 70;
let height = 1.65;
let imc = weight / height ** 2;
let result;

if (imc < 18.5) {
  result = "Underweight";
} else if (imc < 24.9) {
  result = "Normal weight";
} else if (imc < 29.9) {
  result = "Overweight";
} else {
  result = "Obesity";
}

console.log("IMC: " + imc + "\nResult: " + result);