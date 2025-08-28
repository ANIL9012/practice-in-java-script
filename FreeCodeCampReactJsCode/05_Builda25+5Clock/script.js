// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.
// Elements
const breakDecrement = document.getElementById("break-decrement");
const breakIncrement = document.getElementById("break-increment");
const sessionDecrement = document.getElementById("session-decrement");
const sessionIncrement = document.getElementById("session-increment");
const breakLengthEl = document.getElementById("break-length");
const sessionLengthEl = document.getElementById("session-length");
const timerLabel = document.getElementById("timer-label");
const timeLeft = document.getElementById("time-left");
const startStopBtn = document.getElementById("start_stop");
const resetBtn = document.getElementById("reset");
const beepSound = document.getElementById("beep");

const MIN_LENGTH = 1;
const MAX_LENGTH = 60;

let breakLength = 5; // in minutes
let sessionLength = 25; // in minutes
let timer; // the interval ID
let timerRunning = false;
let isSession = true;
let timeRemaining = sessionLength * 60; // in seconds

// Utility: Format seconds as mm:ss
function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
}

// Update display for lengths and time-left
function updateDisplay() {
  breakLengthEl.textContent = breakLength;
  sessionLengthEl.textContent = sessionLength;
  timerLabel.textContent = isSession ? "Session" : "Break";
  timeLeft.textContent = formatTime(timeRemaining);
}

// Reset everything to defaults and stop timer
function reset() {
  clearInterval(timer);
  timerRunning = false;
  isSession = true;
  breakLength = 5;
  sessionLength = 25;
  timeRemaining = sessionLength * 60;
  beepSound.pause();
  beepSound.currentTime = 0;
  updateDisplay();
}

// Change break length by delta, with limits
function changeBreakLength(delta) {
  if (timerRunning) return;
  const newLength = breakLength + delta;
  if (newLength >= MIN_LENGTH && newLength <= MAX_LENGTH) {
    breakLength = newLength;
    if (!isSession) {
      timeRemaining = breakLength * 60;
    }
    updateDisplay();
  }
}

// Change session length by delta, with limits
function changeSessionLength(delta) {
  if (timerRunning) return;
  const newLength = sessionLength + delta;
  if (newLength >= MIN_LENGTH && newLength <= MAX_LENGTH) {
    sessionLength = newLength;
    if (isSession) {
      timeRemaining = sessionLength * 60;
    }
    updateDisplay();
  }
}

// Timer countdown tick
function tick() {
  if (timeRemaining > 0) {
    timeRemaining--;
    timeLeft.textContent = formatTime(timeRemaining);
  } else {
    // Play beep sound
    beepSound.currentTime = 0;
    beepSound.play();

    // Switch sessions/breaks
    isSession = !isSession;
    timerLabel.textContent = isSession ? "Session" : "Break";

    timeRemaining = isSession ? sessionLength * 60 : breakLength * 60;
    timeLeft.textContent = formatTime(timeRemaining);
  }
}

// Start or stop the timer
function startStop() {
  if (timerRunning) {
    // Pause timer
    clearInterval(timer);
    timerRunning = false;
  } else {
    // Start timer
    timer = setInterval(tick, 1000);
    timerRunning = true;
  }
}

// Event listeners
breakDecrement.addEventListener("click", () => changeBreakLength(-1));
breakIncrement.addEventListener("click", () => changeBreakLength(1));
sessionDecrement.addEventListener("click", () => changeSessionLength(-1));
sessionIncrement.addEventListener("click", () => changeSessionLength(1));
startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);

// Initialize default display on load
updateDisplay();
