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

let breakLength = 5; 
let sessionLength = 25;
let timer;
let timerRunning = false;
let isSession = true;
let timeRemaining = sessionLength * 60;

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
}

function updateDisplay() {
  breakLengthEl.textContent = breakLength;
  sessionLengthEl.textContent = sessionLength;
  timerLabel.textContent = isSession ? "Session" : "Break";
  timeLeft.textContent = formatTime(timeRemaining);
}

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

function tick() {
  if (timeRemaining > 0) {
    timeRemaining--;
    timeLeft.textContent = formatTime(timeRemaining);
  } else {
    beepSound.currentTime = 0;
    beepSound.play();

    isSession = !isSession;
    timerLabel.textContent = isSession ? "Session" : "Break";

    timeRemaining = isSession ? sessionLength * 60 : breakLength * 60;
    timeLeft.textContent = formatTime(timeRemaining);
  }
}

function startStop() {
  if (timerRunning) {
    clearInterval(timer);
    timerRunning = false;
  } else {
    timer = setInterval(tick, 1000);
    timerRunning = true;
  }
}

breakDecrement.addEventListener("click", () => changeBreakLength(-1));
breakIncrement.addEventListener("click", () => changeBreakLength(1));
sessionDecrement.addEventListener("click", () => changeSessionLength(-1));
sessionIncrement.addEventListener("click", () => changeSessionLength(1));
startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);

updateDisplay();
