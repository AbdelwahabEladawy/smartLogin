let Uname = document.getElementById("name-signUp");
let email = document.getElementById("email-signUp");
let password = document.getElementById("password-signUp");
let co_password = document.getElementById("co-password");
let emailErrorMessage = document.getElementById("email-error-message");
let passwordErrorMessage = document.getElementById("password-error-message");
let coPasswordErrorMessage = document.getElementById("co-password-error-message");
let group = [];

let localData = localStorage.getItem("local-user");
if (localData) {
  group = JSON.parse(localData);
} else {
  group = [];
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function getInfo() {

  emailErrorMessage.textContent = "";
  passwordErrorMessage.textContent = "";
  coPasswordErrorMessage.textContent = "";

  let isValid = true;


  if (!validateEmail(email.value)) {
    emailErrorMessage.textContent = "Please enter a valid email address.";
    isValid = false;
  }

 
  if (password.value.length < 8) {
    passwordErrorMessage.textContent = "Password must be at least 8 characters long.";
    isValid = false;
  }

  if (password.value !== co_password.value) {
    coPasswordErrorMessage.textContent = "Passwords do not match.";
    isValid = false;
  }

  if (isValid) {
    let userData_signUp = {
      Uname_signUp: Uname.value,
      email_signUp: email.value,
      password_signUp: password.value,
      co_password: co_password.value,
    };

    group.push(userData_signUp);
    localStorage.setItem("local-user", JSON.stringify(group));
    ClearDataUp();
    window.location.href = "login.html"; 
  }
}

function ClearDataUp() {
  Uname.value = "";
  email.value = "";
  password.value = "";
  co_password.value = "";
}

document.getElementById("signUpBtn").addEventListener("click", function(event) {
  event.preventDefault(); 
  getInfo();
});
