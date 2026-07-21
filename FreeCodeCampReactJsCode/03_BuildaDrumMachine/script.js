
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

function playSound(pad) {
  const audio = pad.querySelector("audio");
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  const soundName = soundMap[audio.id] || "Unknown sound";
  display.textContent = soundName;

  pad.classList.add("active");
  setTimeout(() => {
    pad.classList.remove("active");
  }, 150);
}

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => playSound(pad));
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  if (!soundMap.hasOwnProperty(key)) return;

  const pad = Array.from(drumPads).find((p) => p.textContent.trim() === key);
  if (pad) {
    playSound(pad);
  }
});
