(function () {
  "use strict";

  const resultEl = document.getElementById("result");
  const expressionEl = document.getElementById("expression");
  const buttonsContainer = document.getElementById("buttons");

  let currentInput = "0";
  let previousInput = "";
  let operator = null;
  let shouldResetScreen = false;
  let justEvaluated = false;
  let expressionString = "";

  function updateDisplay() {
    // format number with commas for readability (only integer part)
    let displayValue = currentInput;
    if (displayValue.includes(".")) {
      const parts = displayValue.split(".");
      parts[0] = Number(parts[0]).toLocaleString("en-US");
      displayValue = parts.join(".");
    } else {
      displayValue = Number(displayValue).toLocaleString("en-US");
    }

    if (displayValue.length > 12) {
      resultEl.classList.add("shrink");
    } else {
      resultEl.classList.remove("shrink");
    }

    resultEl.textContent = displayValue;
    expressionEl.textContent = expressionString;
  }

  function resetCalculator() {
    currentInput = "0";
    previousInput = "";
    operator = null;
    shouldResetScreen = false;
    justEvaluated = false;
    expressionString = "";
    updateDisplay();
  }

  function inputNumber(num) {
    if (justEvaluated) {
      currentInput = "0";
      previousInput = "";
      operator = null;
      expressionString = "";
      justEvaluated = false;
      shouldResetScreen = false;
    }

    if (shouldResetScreen) {
      currentInput = "0";
      shouldResetScreen = false;
    }

    if (currentInput === "0" && num !== ".") {
      currentInput = num;
    } else {
      if (currentInput.replace("-", "").replace(".", "").length >= 15) return;
      currentInput += num;
    }
    updateDisplay();
  }

  function inputDecimal() {
    if (justEvaluated) {
      currentInput = "0";
      previousInput = "";
      operator = null;
      expressionString = "";
      justEvaluated = false;
      shouldResetScreen = false;
    }
    if (shouldResetScreen) {
      currentInput = "0";
      shouldResetScreen = false;
    }
    if (!currentInput.includes(".")) {
      currentInput += ".";
    }
    updateDisplay();
  }

  function handleOperator(op) {
    const current = parseFloat(currentInput);
    if (operator && !shouldResetScreen) {
      const result = compute(parseFloat(previousInput), current, operator);
      const resultStr = String(result);
      currentInput = resultStr;
      expressionString = `${formatNumber(resultStr)} ${op} `;
      updateDisplay();
      previousInput = resultStr;
      operator = op;
      shouldResetScreen = true;
      justEvaluated = false;
      return;
    }

    previousInput = currentInput;
    operator = op;
    expressionString = `${formatNumber(currentInput)} ${op} `;
    shouldResetScreen = true;
    justEvaluated = false;
    updateDisplay();
  }

  function compute(a, b, op) {
    let result;
    switch (op) {
      case "+":
        result = a + b;
        break;
      case "−":
        result = a - b;
        break;
      case "×":
        result = a * b;
        break;
      case "÷":
        result = b !== 0 ? a / b : "Error";
        break;
      default:
        result = b;
    }
    if (typeof result === "number" && !Number.isInteger(result)) {
      result = parseFloat(result.toPrecision(12));
    }
    return result;
  }

  function formatNumber(num) {
    if (num === "Error") return "Error";
    const n = typeof num === "string" ? parseFloat(num) : num;
    if (isNaN(n)) return "0";
    let str = String(n);
    if (str.includes(".")) {
      const parts = str.split(".");
      parts[0] = Number(parts[0]).toLocaleString("en-US");
      return parts.join(".");
    }
    return Number(n).toLocaleString("en-US");
  }

  function calculate() {
    if (!operator) {
      justEvaluated = true;
      expressionString = `${formatNumber(currentInput)} =`;
      updateDisplay();
      return;
    }

    const current = parseFloat(currentInput);
    const prev = parseFloat(previousInput);
    if (isNaN(prev) || isNaN(current)) return;

    const result = compute(prev, current, operator);
    const resultStr = String(result);

    if (resultStr === "Error") {
      expressionString = `Error`;
      currentInput = "0";
      previousInput = "";
      operator = null;
      shouldResetScreen = true;
      justEvaluated = true;
      updateDisplay();
      return;
    }

    expressionString = `${formatNumber(previousInput)} ${operator} ${formatNumber(currentInput)} =`;
    currentInput = resultStr;
    previousInput = "";
    operator = null;
    shouldResetScreen = true;
    justEvaluated = true;
    updateDisplay();
  }

  function toggleSign() {
    if (currentInput === "0") return;
    if (currentInput.startsWith("-")) {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = "-" + currentInput;
    }
    updateDisplay();
  }

  function percent() {
    const num = parseFloat(currentInput);
    if (isNaN(num)) return;
    const result = num / 100;
    currentInput = String(result);
    updateDisplay();
  }

  // ─── Ripple effect ────────────────────────────────────────
  function handleRipple(e, btn) {
    const rect = btn.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    btn.style.setProperty("--x", x + "%");
    btn.style.setProperty("--y", y + "%");
  }

  function onButtonClick(e) {
    const btn = e.currentTarget;
    handleRipple(e, btn);

    const action = btn.dataset.action;
    const value = btn.dataset.value;

    switch (action) {
      case "number":
        inputNumber(value);
        break;
      case "decimal":
        inputDecimal();
        break;
      case "operator":
        handleOperator(value);
        break;
      case "calculate":
        calculate();
        break;
      case "clear":
        resetCalculator();
        break;
      case "sign":
        toggleSign();
        break;
      case "percent":
        percent();
        break;
      default:
        break;
    }
  }

  const allButtons = buttonsContainer.querySelectorAll(".btn");
  allButtons.forEach((btn) => {
    btn.addEventListener("click", onButtonClick);
  });

  document.addEventListener("keydown", (e) => {
    const key = e.key;

    const controlKeys = ["Enter", "Escape", "Backspace", "Delete", ".", "%"];
    if (
      !isNaN(key) ||
      controlKeys.includes(key) ||
      ["+", "-", "*", "/"].includes(key)
    ) {
      e.preventDefault();
    }

    if (!isNaN(key)) {
      inputNumber(key);
      return;
    }

    switch (key) {
      case ".":
        inputDecimal();
        break;
      case "+":
        handleOperator("+");
        break;
      case "-":
        handleOperator("−");
        break;
      case "*":
        handleOperator("×");
        break;
      case "/":
        handleOperator("÷");
        break;
      case "Enter":
      case "=":
        calculate();
        break;
      case "Escape":
      case "Delete":
        resetCalculator();
        break;
      case "Backspace":
        if (justEvaluated) {
          resetCalculator();
          return;
        }
        if (currentInput.length > 1) {
          currentInput = currentInput.slice(0, -1);
        } else {
          currentInput = "0";
        }
        updateDisplay();
        break;
      case "%":
        percent();
        break;
      default:
        break;
    }
  });

  resetCalculator();

  allButtons.forEach((btn) => {
    btn.addEventListener("contextmenu", (e) => e.preventDefault());
  });
})();
