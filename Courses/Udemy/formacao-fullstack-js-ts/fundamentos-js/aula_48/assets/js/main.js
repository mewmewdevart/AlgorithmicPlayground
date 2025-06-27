const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

document.addEventListener('click', function (e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

function criaLi() {
  const li = document.createElement('li');
  return li;
}

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const btnApagar = document.createElement('button');
  btnApagar.innerText = 'apagar';
  btnApagar.setAttribute('class', 'apagar');
  btnApagar.setAttribute('title', 'apagar essa tarefa');
  li.appendChild(btnApagar);
}

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefasSalvas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefasSalvas);

  if (!listaDeTarefas) return;

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}

adicionaTarefasSalvas();
