function insert(num) {
  let numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
  document.getElementById('resultado').innerHTML = "";
}

function back() {
  let result = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = result.substring(0, result.length -1);
}

function calcular() {
  let result = document.getElementById('resultado').innerHTML;
  if (result) {
    document.getElementById('resultado').innerHTML = eval(result)
  } else {
    document.getElementById('resultado').innerHTML = "None"
  }
}