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
// Map key to sound name for display
const soundMap = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n'-Hat",
  X: "Kick",
  C: "Closed-HH",
};

const display = document.getElementById("display");
const drumPads = document.querySelectorAll(".drum-pad");

// Function to play the audio and update display
function playSound(pad) {
  const audio = pad.querySelector("audio");
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  const soundName = soundMap[audio.id] || "Unknown sound";
  display.textContent = soundName;

  // Add active class for visual feedback
  pad.classList.add("active");
  setTimeout(() => {
    pad.classList.remove("active");
  }, 150);
}

// Click event listener for drum pads
drumPads.forEach((pad) => {
  pad.addEventListener("click", () => playSound(pad));
});

// Keydown event listener for keyboard events
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (!soundMap.hasOwnProperty(key)) return;

  const pad = Array.from(drumPads).find((p) => p.textContent.trim() === key);
  if (pad) {
    playSound(pad);
  }
});
