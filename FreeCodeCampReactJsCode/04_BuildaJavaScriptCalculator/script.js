const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
const decimalBtn = document.getElementById("decimal");
const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const numberButtons = Array.from(document.querySelectorAll(".number"));

let currentInput = "0";
let formula = "";
let justCalculated = false;

const operators = ["+", "-", "*", "/"];

function updateDisplay(value) {
  display.textContent = value;
}

function isOperator(char) {
  return operators.includes(char);
}

clearBtn.addEventListener("click", () => {
  currentInput = "0";
  formula = "";
  justCalculated = false;
  updateDisplay(currentInput);
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let num = button.textContent;

    if (justCalculated) {
      currentInput = num;
      formula = "";
      justCalculated = false;
      updateDisplay(currentInput);
      return;
    }

    if (currentInput === "0") {
      if (num === "0") {
        return;
      } else {
        currentInput = num;
        updateDisplay(currentInput);
        return;
      }
    }

    currentInput += num;
    updateDisplay(currentInput);
  });
});

decimalBtn.addEventListener("click", () => {
  if (justCalculated) {
    currentInput = "0.";
    formula = "";
    justCalculated = false;
    updateDisplay(currentInput);
    return;
  }

  const lastNumber = getLastNumber(currentInput);
  if (!lastNumber.includes(".")) {
    currentInput += ".";
    updateDisplay(currentInput);
  }
});

function getLastNumber(str) {
  let parts = str.split(/[\+\-\*\/]/);
  return parts[parts.length - 1];
}

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let op = button.id;
    let opSymbol = getOperatorSymbol(op);

    if (justCalculated) {
      formula = currentInput;
      justCalculated = false;
    }

    if (formula === "") {
      formula = currentInput;
    } else {
      if (endsWithOperator(formula)) {
        if (opSymbol === "-" && !formula.endsWith("-")) {
          formula += opSymbol; // allow negative number
        } else {
          formula = formula.slice(0, -1) + opSymbol;
        }
      } else {
        formula += currentInput;
        formula += opSymbol;
      }
    }

    currentInput = "";
    updateDisplay(opSymbol);
  });
});

function getOperatorSymbol(id) {
  switch (id) {
    case "add":
      return "+";
    case "subtract":
      return "-";
    case "multiply":
      return "*";
    case "divide":
      return "/";
    default:
      return "";
  }
}

function endsWithOperator(str) {
  return /[\+\*\/\-]$/.test(str);
}

equalsBtn.addEventListener("click", () => {
  if (currentInput === "" && endsWithOperator(formula)) {
    formula = formula.slice(0, -1);
  } else if (currentInput !== "") {
    formula += currentInput;
  }

  if (formula === "") {
    updateDisplay("0");
    currentInput = "0";
    return;
  }

  try {
    const result = evaluateFormula(formula);
    updateDisplay(result);
    currentInput = String(result);
    formula = "";
    justCalculated = true;
  } catch {
    updateDisplay("Error");
    currentInput = "";
    formula = "";
    justCalculated = false;
  }
});

function evaluateFormula(expr) {
  if (!/^[0-9+\-*/.]+$/.test(expr)) {
    throw "Invalid characters in expression";
  }

  let result = Function(`return (${expr})`)();

  return Number.isInteger(result) ? result : parseFloat(result.toFixed(6));
}

updateDisplay(currentInput);
