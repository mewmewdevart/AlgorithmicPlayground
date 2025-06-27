const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let timerInterval;
let startTime;
let armazenarNumber = 0;
let decorrido = 0;

function startTimer() {
  clearInterval(timerInterval);
  startTime = Date.now() - decorrido; 

  timerInterval = setInterval(() => {
    decorrido = Date.now() - startTime;
    relogio.innerText = formatTime(decorrido);
  }, 1000);

  armazenarNumber = timerInterval;
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours.toString().padStart(2, '0')}:` +
         `${minutes.toString().padStart(2, '0')}:` +
         `${seconds.toString().padStart(2, '0')}`;
}

function stopTimer() {
  clearInterval(timerInterval); 
}

iniciar.addEventListener('click', function() {
  startTimer();
  iniciar.disabled = true;
  pausar.disabled = false;
});

pausar.addEventListener('click', function() {
  stopTimer(); 
  iniciar.innerText = 'Continuar';
  iniciar.disabled = false;
  pausar.disabled = true;
});

zerar.addEventListener('click', function() {
  stopTimer(); 
  decorrido = 0; 
  relogio.innerText = formatTime(decorrido);
  iniciar.innerText = 'Iniciar';
  iniciar.disabled = false;
  pausar.disabled = true;
});
