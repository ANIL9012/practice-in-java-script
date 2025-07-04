const checkboxList = document.querySelectorAll(".custom-checkbox");
const allInputFillds = document.querySelectorAll(".goal-input");
const ErrorLable = document.querySelector(".error-lable");
let progressLable = document.querySelector(".progress-lable");
const progressbar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");

const allQuotes = [
  "Raise the bar by complating your goals",
  "well begun is half done",
  "just a step away, keep going!",
  "wow! you just completed all the goals, time for chill :D",
];

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
    first:{
        name: '',
        completed: false,
    },
    second:{
        name: '',
        completed: false,
    },
    third:{
        name: '',
        completed: false,
    }
};

let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;

progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`;
progressLable.innerText = allQuotes[completedGoalsCount];

checkboxList.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const allgoalsadded = [...allInputFillds].every(function (input) {
      return input.value;
    });

    if (allgoalsadded) {
      checkbox.parentElement.classList.toggle("completed");

      const inputId = checkbox.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
      progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`;
      progressLable.innerText = allQuotes[completedGoalsCount];
      localStorage.setItem("allGoals", JSON.stringify(allGoals));

    } else {
      progressbar.classList.add("show-error");
    }
  });
});

allInputFillds.forEach((input) => {
  input.value = allGoals[input.id].name;

  if (allGoals[input.id].completed) {
    input.parentElement.classList.add("completed");
  }

  input.addEventListener("focus", () => {
    progressbar.classList.remove("show-error");
  });

  input.addEventListener("input", (e) => {
    if (allGoals[input.id].completed) {
      input.value = allGoals[input.id].name;
      return;
    }

    allGoals[input.id].name = input.value
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
