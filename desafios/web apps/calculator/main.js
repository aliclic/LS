

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = True

const atualizarDisplay = (texto) => {
  if (novoNumero) {
    display.textContent = texto;
    novoNumero = False
  } else {
    display.textContent += texto;
  }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach (numeros => numeros.addEventListener('click', inserirNumero));

operadores.numeros.forEach(operador => operador.addEventListener('click', selecionarOperador));