const form = document.getElementById("myform");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Group elements (for adding/removing error/success classes)
const nameGroup = document.getElementById("name-group");
const emailGroup = document.getElementById("email-group");
const passwordGroup = document.getElementById("password-group");

// Global success message element
const globalSuccess = document.getElementById("globalSuccess");

// Helper function to validate a single field and toggle classes
function validateField(field) {
  const value = field.value.trim();
  let isValid = false;

  if (field === nameInput) {
    if (value === "") {
      nameGroup.classList.add("error");
      nameGroup.classList.remove("success");
      isValid = false;
    } else {
      nameGroup.classList.remove("error");
      nameGroup.classList.add("success");
      isValid = true;
    }
  }

  if (field === emailInput) {
    // Simple email regex (basic validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === "" || !emailRegex.test(value)) {
      emailGroup.classList.add("error");
      emailGroup.classList.remove("success");
      isValid = false;
    } else {
      emailGroup.classList.remove("error");
      emailGroup.classList.add("success");
      isValid = true;
    }
  }

  if (field === passwordInput) {
    if (value.length < 8) {
      passwordGroup.classList.add("error");
      passwordGroup.classList.remove("success");
      isValid = false;
    } else {
      passwordGroup.classList.remove("error");
      passwordGroup.classList.add("success");
      isValid = true;
    }
  }

  return isValid;
}

// Real-time validation on blur (when user leaves the field)
nameInput.addEventListener("blur", () => validateField(nameInput));
emailInput.addEventListener("blur", () => validateField(emailInput));
passwordInput.addEventListener("blur", () => validateField(passwordInput));

// Also clear error on input if user starts typing
[nameInput, emailInput, passwordInput].forEach((input) => {
  input.addEventListener("input", () => {
    const group = input.closest(".form-group");
    // Only re-validate if the field already has error or success class
    if (
      group.classList.contains("error") ||
      group.classList.contains("success")
    ) {
      validateField(input);
    }
  });
});

// ---------- FORM SUBMIT ----------
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Hide previous success message
  globalSuccess.classList.remove("show");

  // Validate all fields
  const isNameValid = validateField(nameInput);
  const isEmailValid = validateField(emailInput);
  const isPasswordValid = validateField(passwordInput);

  // If any field is invalid, stop submission
  if (!isNameValid || !isEmailValid || !isPasswordValid) {
    // Focus the first invalid field
    const firstError = form.querySelector(".form-group.error input");
    if (firstError) {
      firstError.focus();
    }
    return; // form not submitted
  }

  // ---------- ALL FIELDS VALID ----------
  // Prepare data object
  const formData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value,
  };

  // Log to console
  console.log("Form Data Submitted:");
  console.log(formData);
  console.log("JSON:", JSON.stringify(formData, null, 2));

  // Show success message
  globalSuccess.classList.add("show");

  // Optional: Show a brief alert (you can remove this if you want)
  alert("Form submitted successfully! Check console for data.");

  // (Optional) Reset form after success – uncomment if needed
  // form.reset();
  // Remove success/error classes from all groups
  // [nameGroup, emailGroup, passwordGroup].forEach(g => {
  //   g.classList.remove("success", "error");
  // });
  // globalSuccess.classList.remove("show");
});
