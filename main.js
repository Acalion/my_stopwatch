// Stopwatch variables
let timer;
let isRunning = false;
let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;

// Select DOM elements
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const themeToggle = document.getElementById("themeToggle");
const laps = document.getElementById("laps");

// Update display function
function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds;
  display.textContent = `${h}:${m}:${s}:${ms}`;
}

// Start function
function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      milliseconds += 10;
      if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 10);
  }
}

// Stop function
function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

// Reset function
function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  laps.innerHTML = "";
}

// Lap function
function recordLap() {
  if (isRunning) {
    const lapTime = display.textContent;
    const li = document.createElement("li");
    li.textContent = `Lap ${laps.childElementCount + 1}: ${lapTime}`;
    laps.appendChild(li);
  }
}

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeToggle.textContent = 
    document.body.classList.contains("dark-theme") ? "☀️ Light" : "🌙 Dark";
});

// Event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);

// Initialize display
updateDisplay();
