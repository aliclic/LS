let cep = document.getElementBy=('cep');
let rua = document.getElementById('rua');
let bairro = document.getElementById('bairro');
let estado = document.getElementById('estado');
let cidade = document.getElementById('cidade');

function limpaFormularioCep() {
  //Limpa valores do formulário de cep.
  rua.value = ("");
  bairro.value = ("");
  estado.value = ("");
  cidade.value = ("");
}

async function getCep(cep) {
  try {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(url);
    const info = await response.json();
  
    rua.value = info.logradouro;
    bairro.value = info.bairro;
    estado.value = info.uf;
    cidade.value = info.localidade;

  } catch(erro) {
    limpaFormularioCep()
    alert("CEP não encontrado.");
  }
}