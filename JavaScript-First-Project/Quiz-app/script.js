const SignupBtn = document.querySelector(".signup-btn");
const SignupBox = document.querySelector(".signup-box");
const LoginBtn = document.querySelector(".login-btn");
const LoginBox = document.querySelector(".login-box");

SignupBtn.addEventListener("click", () => {
  SignupBox.classList.add("active");
  LoginBox.classList.remove("active");
  LoginBtn.classList.remove("d-none");
  SignupBtn.classList.add("d-none");
});

LoginBtn.addEventListener("click", () => {
  SignupBox.classList.remove("active");
  LoginBox.classList.add("active");
  LoginBtn.classList.add("d-none");
  SignupBtn.classList.remove("d-none");
});

// Start register coding

const registeredForm = document.querySelector(".signup-form");
const allInput = registeredForm.querySelectorAll("input");
const textArea = registeredForm.querySelector("textarea");

registeredForm.addEventListener("submit", (e) => {
  e.preventDefault();
  registrationData();
});

const registrationData = () => {
  if (localStorage.getItem(allInput[0].value) == null) {
    const userData = {
      brandcode: allInput[0].value,
      brandName: allInput[1].value,
      website: allInput[2].value,
      contact: allInput[3].value,
      address: textArea.value,
      username: allInput[4].value,
      password: allInput[5].value,
    };
    let userString = JSON.stringify(userData);
    localStorage.setItem(allInput[0].value, userString);
    registeredForm.reset("");
    swal("Registration Done", "Please Sign in!", "success");
  } else {
    swal("Change Brand Code", "This Brand Code Is Already Taken!", "warning");
  }
};

// Start signing coding

const signingBtn = document.querySelector(".signing-btn");
const brandCode = document.querySelector("#brand-code");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

signingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (brandCode.value && username.value && password.value != "") {
    if (localStorage.getItem(brandCode.value) != null) {
      const allData = JSON.parse(localStorage.getItem(brandCode.value));
      console.log(allData);
      if (allData.username == username.value) {
            signingBtn.innerHTML = "Please Wait...";
            signingBtn.disabled = true;
            setTimeout(function(){
                window.location = "./dashboard/dashboard.html"
            })
        if(allData.password == password.value){
            alert("Login is Success")
        }else{
        swal("Wrong Password !", "Please Check the Password", "warning");
        }
      } else {
        swal("Wrong Username !", "Please Check the username", "warning");
      }
    } else {
      swal("Wrong Brand Code !", "Please Sign Up First", "warning");
    }
  } else {
    swal("Empty Field !", "Please fill All the field", "warning");
  }
});
