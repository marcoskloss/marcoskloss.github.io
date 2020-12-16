const inputAdultos = document.querySelector('#adultos');
const inputCriancas = document.querySelector('#criancas');
const inputDuracao = document.querySelector('#duracao');
const calcularBtn = document.querySelector('button');
const resultado = document.querySelector('.resultado');

function validaCampo() {
  const inputs = document.querySelectorAll('input');
  let validacao = true;

  inputs.forEach(input => {
    if(input.value == '') {
      validacao = false;
      return;
    }
  });

  return validacao;
}

function inputInvalido() {
  resultado.innerHTML = 
  `
  <span>Todos os campos devem ser preenchidos!</span>
  `;
  inputAdultos.focus();
}

function calculaQuantidades() {

  const adultos = inputAdultos.value;
  const criancas = inputCriancas.value;
  const duracao = inputAdultos.value;

  const carne = carnePorPessoa(duracao);
  const cerveja = cervejaPorPessoa(duracao);
  const bebida = bebidaPorPessoa(duracao);

  const quantidadeCarne = adultos * carne + (criancas * carne / 2);
  const quantidadeCerveja = adultos * cerveja;
  const quantidadeBebida =  adultos * bebida + (criancas * bebida / 2); 

  const resultado = {
    carne: quantidadeCarne,
    cerveja: quantidadeCerveja,
    bebida: quantidadeBebida
  }

  console.log(resultado);

  return resultado;
}

function renderizaResultado(quantidades) {

  resultado.innerHTML = '';

  const carne = quantidades.carne;
  const cerveja = quantidades.cerveja;
  const bebida = quantidades.bebida;

  resultado.innerHTML += `<p>${carne / 1000} Kg de Carne`;
  resultado.innerHTML += `<p>${cerveja / 1000} L de Cerveja`;
  resultado.innerHTML += `<p>${bebida / 1000} L de Bebidas`;

}

function carnePorPessoa(duracao) {
  if(duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPorPessoa(duracao) {
  if(duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidaPorPessoa(duracao) {
  if(duracao >= 6) {
    return 1600;
  } else {
    return 1000;
  }
}

function calcular() {
  if(!validaCampo()) {
   inputInvalido();
    return;
  }
  const quantidades = calculaQuantidades();
  renderizaResultado(quantidades);
}

calcularBtn.addEventListener('click', calcular);