// operator: '+', '-', '*', '/'
function calc(param1, param2, operator) {
  switch(operator) {
    case '+':
      return param1 + param2;
    case '-':
      return param1 - param2;
    case '*':
      return param1 * param2;
    case '/':
      return param1 / param2;
  }
}

console.log(calc(5, 3, '+')) 

/*function calc() {
  let resultado = document.getElementById('resultado');
  let n1 = document.getElementById('number1').value;
  let n2 = document.getElementById('number2').value;
  
  let operation = document.getElementById('operation').value

  if (operation === '+') 
      resultado.innerText = soma(n1, n2)
  
  else if (operation === '-')
      resultado.innerText = subtrai(n1, n2)

  else if (operation === '/')
      resultado.innerText = divide(n1, n2)
  
  else if (operation === '*') 
      resultado.innerText = multiplica(n1, n2)    
};

function soma(n1, n2) {
  return Number(n1) + Number(n2)
}

function subtrai(n1, n2) {
  return Number(n1) - Number(n2)
}

function divide(n1, n2) {
  return Number(n1) / Number(n2)
}

function multiplica(n1, n2) { 
  return Number(n1) * Number(n2)
} */