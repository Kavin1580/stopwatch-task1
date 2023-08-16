let intervalId;
let startTime = 0;
let running = false;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
  if (!running) {
    running = true;
    startTime = Math.floor(Date.now() / 1000) - startTime;
    intervalId = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  if (running) {
    running = false;
    clearInterval(intervalId);
  }
}

function resetTimer() {
  stopTimer();
  startTime = 0;
  timerElement.textContent = '00:00:00';
}

function updateTimer() {
  const currentTime = Math.floor(Date.now() / 1000);
  const elapsedTime = currentTime - startTime;
  timerElement.textContent = formatTime(elapsedTime);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
