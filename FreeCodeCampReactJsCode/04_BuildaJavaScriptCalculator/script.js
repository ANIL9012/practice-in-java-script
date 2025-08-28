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
const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
const decimalBtn = document.getElementById("decimal");
const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const numberButtons = Array.from(document.querySelectorAll(".number"));

let currentInput = "0";
let formula = "";
let justCalculated = false;

// Helpers
const operators = ["+", "-", "*", "/"];

function updateDisplay(value) {
  display.textContent = value;
}

function isOperator(char) {
  return operators.includes(char);
}

// Clear the calculator
clearBtn.addEventListener("click", () => {
  currentInput = "0";
  formula = "";
  justCalculated = false;
  updateDisplay(currentInput);
});

// Handle number button click
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let num = button.textContent;

    if (justCalculated) {
      // Start new input after calculation unless operator pressed
      currentInput = num;
      formula = "";
      justCalculated = false;
      updateDisplay(currentInput);
      return;
    }

    // Prevent starting number with multiple zeros
    if (currentInput === "0") {
      if (num === "0") {
        // do nothing
        return;
      } else {
        currentInput = num; // Replace initial zero
        updateDisplay(currentInput);
        return;
      }
    }

    // Append number
    currentInput += num;
    updateDisplay(currentInput);
  });
});

// Handle decimal input
decimalBtn.addEventListener("click", () => {
  if (justCalculated) {
    currentInput = "0.";
    formula = "";
    justCalculated = false;
    updateDisplay(currentInput);
    return;
  }

  // Only add decimal if not already present in the current number
  const lastNumber = getLastNumber(currentInput);
  if (!lastNumber.includes(".")) {
    currentInput += ".";
    updateDisplay(currentInput);
  }
});

// Utility to get last number in a string
function getLastNumber(str) {
  // Split by operators and return last segment
  let parts = str.split(/[\+\-\*\/]/);
  return parts[parts.length - 1];
}

// Handle operator click
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let op = button.id;
    let opSymbol = getOperatorSymbol(op);

    if (justCalculated) {
      // Continue calculation on previous result
      formula = currentInput;
      justCalculated = false;
    }

    if (formula === "") {
      formula = currentInput;
    } else {
      if (endsWithOperator(formula)) {
        // Replace operator unless negative sign handled differently
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

// Convert button id to operator symbol
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

// Check if string ends with operator (not including trailing negative sign)
function endsWithOperator(str) {
  // Ends with *, +, or / or single minus (but exclude negative number, e.g. 5*-4)
  return /[\+\*\/\-]$/.test(str);
}

// Handle equals button
equalsBtn.addEventListener("click", () => {
  if (currentInput === "" && endsWithOperator(formula)) {
    // If formula ends with operator and no current input, remove operator
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
    // Evaluate formula with reasonable decimal precision
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
  // Sanitize expression to allow digits, operators, and decimals only
  if (!/^[0-9+\-*/.]+$/.test(expr)) {
    throw "Invalid characters in expression";
  }

  // Use Function constructor to evaluate expression safely in this context
  // It respects operator precedence (formula logic)
  let result = Function(`return (${expr})`)();

  // Round to 6 decimal places for display, can handle decimals and division precision
  return Number.isInteger(result) ? result : parseFloat(result.toFixed(6));
}

// Prevent multiple consecutive zeros at start of number input already handled in numberButtons

// Initialize display
updateDisplay(currentInput);
