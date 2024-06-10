let loginmail = document.getElementById("LogMail");
let passwordLogin = document.getElementById("password-login");
let errorMessage = document.getElementById("error-message");
let emailErrorMessage = document.getElementById("email-error-message");

function validateEmail(email) {

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function confirmData() {
    let loginData = {
        logEmail: loginmail.value,
        logPass: passwordLogin.value
    };

   
    emailErrorMessage.textContent = "";
    errorMessage.textContent = "";


    if (!validateEmail(loginData.logEmail)) {
        emailErrorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    let localData = localStorage.getItem("local-user");
    if (localData) {
        let users = JSON.parse(localData);
        let userExists = users.some(user => user.email_signUp === loginData.logEmail && user.password_signUp === loginData.logPass);

        if (userExists) {
          
            errorMessage.textContent = "";
            window.location.href = "welcome.html";
        } else {
         
            errorMessage.textContent = "Email or password is incorrect. Please sign up.";
        }
    } else {
       
        errorMessage.textContent = "No users found. Please sign up.";
    }
}

document.getElementById("loginBtn").addEventListener("click", function(event) {
    event.preventDefault(); 
    confirmData();
});
