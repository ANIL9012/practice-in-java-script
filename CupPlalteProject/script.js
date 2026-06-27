// script.js – interactive sip & eat with cup in hand

(function () {
  "use strict";

  const person = document.getElementById("person");
  const plate = document.getElementById("plate");
  const statusEl = document.getElementById("action-status");
  const btnSip = document.getElementById("btn-sip");
  const btnEat = document.getElementById("btn-eat");
  const btnReset = document.getElementById("btn-reset");
  const mouth = document.getElementById("mouth");
  const leftArm = document.getElementById("left-arm");
  const rightArm = document.getElementById("right-arm");

  // state
  let currentAction = "idle";

  // reset to idle
  function resetPerson() {
    person.classList.remove("sipping", "eating");
    // reset inline styles (if any)
    leftArm.style.transform = "";
    rightArm.style.transform = "";
    if (mouth) {
      mouth.style.width = "";
      mouth.style.height = "";
      mouth.style.background = "";
      mouth.style.borderRadius = "";
    }
    currentAction = "idle";
    statusEl.innerText = "👋 ready · click plate or buttons";
  }

  // sip tea (cup in left hand)
  function sipTea() {
    resetPerson();
    void person.offsetWidth; // force reflow
    person.classList.add("sipping");
    currentAction = "sipping";
    statusEl.innerText = "☕ sipping chai ...";
    // extra precision
    leftArm.style.transform = "rotate(0deg) translateX(8px) translateY(-4px)";
    rightArm.style.transform =
      "rotate(-32deg) translateX(-6px) translateY(-6px)";
    if (mouth) {
      mouth.style.width = "12px";
      mouth.style.height = "10px";
      mouth.style.background = "#8f5a48";
      mouth.style.borderRadius = "30px 30px 10px 10px";
    }
  }

  // eat snack (biscuit/namkeen in right hand)
  function eatSnack() {
    resetPerson();
    void person.offsetWidth;
    person.classList.add("eating");
    currentAction = "eating";
    statusEl.innerText = "🍪 crunch! eating biscuit & namkeen";
    leftArm.style.transform = "rotate(6deg) translateX(2px)";
    rightArm.style.transform =
      "rotate(18deg) translateX(-18px) translateY(-18px)";
    if (mouth) {
      mouth.style.width = "20px";
      mouth.style.height = "12px";
      mouth.style.background = "#a1644f";
      mouth.style.borderRadius = "10px 10px 30px 30px";
    }
  }

  // event listeners
  plate.addEventListener("click", (e) => {
    e.stopPropagation();
    eatSnack();
  });

  btnSip.addEventListener("click", sipTea);
  btnEat.addEventListener("click", eatSnack);

  btnReset.addEventListener("click", () => {
    resetPerson();
    leftArm.style.transform = "";
    rightArm.style.transform = "";
    if (mouth) {
      mouth.style.width = "";
      mouth.style.height = "";
      mouth.style.background = "";
      mouth.style.borderRadius = "";
    }
    statusEl.innerText = "⟲ reset · take a break";
    setTimeout(() => {
      statusEl.innerText = "👋 click plate or buttons";
    }, 1200);
  });

  // click on person → reset (nice UX)
  person.addEventListener("click", (e) => {
    e.stopPropagation();
    resetPerson();
    leftArm.style.transform = "";
    rightArm.style.transform = "";
    if (mouth) {
      mouth.style.width = "";
      mouth.style.height = "";
      mouth.style.background = "";
      mouth.style.borderRadius = "";
    }
    statusEl.innerText = "🧑‍🦰 hey!";
    setTimeout(() => {
      statusEl.innerText = "👋 click plate or buttons";
    }, 1000);
  });

  // initial status
  resetPerson();
  statusEl.innerText = "☕ cup in hand · 🍪 plate to eat";
})();
