function checkPasswordStrength() {
    const passwordInput = document.getElementById('password').value;
    const strengthText = document.getElementById('strengthText');

    let upperCase = /[A-Z]/;
    let lowerCase = /[a-z]/;
    let number = /[0-9]/;
    let specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

    let strength = 0;

    console.log("function called with password: + " + passwordInput);

    if (passwordInput.length === 0) {
        strengthText.style.color = "white";
        strengthText.textContent = "Enter password";
        return;  // stop the function here if password is empty
    }

    // Determine strength based on character types
    if (lowerCase.test(passwordInput) && upperCase.test(passwordInput) && number.test(passwordInput) && specialCharacter.test(passwordInput) ) {
        strength = 10;
    } else if (lowerCase.test(passwordInput) && upperCase.test(passwordInput) && number.test(passwordInput) || specialCharacter.test(passwordInput)) {
        strength = 3;
    } else if (lowerCase.test(passwordInput) && upperCase.test(passwordInput) || number.test(passwordInput) && specialCharacter.test(passwordInput)) {
        strength = 3;
    } else if (lowerCase.test(passwordInput) && upperCase.test(passwordInput) || number.test(passwordInput) || specialCharacter.test(passwordInput)) {
        strength = 3;
    } else if (lowerCase.test(passwordInput) || upperCase.test(passwordInput) || number.test(passwordInput) || specialCharacter.test(passwordInput)) {
        strength = 1;
        strengthText.textContent = "include uppercase letters,numbers and special characters";
    }

    // Adjust strength based on length
    if (passwordInput.length < 5) {
        strength = 1;
        strengthText.textContent = "Password is too short";
    } else if (passwordInput.length >= 15) {
        strength += 5;
    } else if (passwordInput.length >= 10) {
        strength++;
    }

    // Display strength result
    if (strength >= 15){
        strengthText.style.color = "green";
        strengthText.textContent = "Password is very strong";
    } else if (strength >= 11){
        strengthText.style.color = "lightgreen";
        strengthText.textContent = "Password is strong";
    } else if (strength >= 5){
        strengthText.style.color = "orange";
        strengthText.textContent = "Password is medium";
    } else if (strength > 1){
        strengthText.style.color = "red";
        strengthText.textContent = "Password is weak";
    }
}


function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
}
