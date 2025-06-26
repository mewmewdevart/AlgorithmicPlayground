// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const peso = Number(document.querySelector('#peso').value);
  const altura = Number(document.querySelector('#altura').value);

  if(!peso){
    setResult('Peso inválido', false);
    return ;
  }

  if(!altura){
    setResult('Peso inválido', false);
    return ;
  }
  
  const result = getIMC(peso, altura);

  setResult(result, true);

});

function createP () {
  const p = document.createElement('p');
  return p;
}

function getIMC(peso, altura) {
  const IMC = peso / altura ** 2;

  if (IMC >= 40) return "Obesidade grau 3";
  else if (IMC >= 35) return "Obesidade grau 2";
  else if (IMC >= 30) return "Obesidade grau 1";
  else if (IMC >= 25) return "Sobrepeso";
  else if (IMC >= 18.5) return "Peso normal";
  else return "Abaixo do peso";
}

function setResult (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = createP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
