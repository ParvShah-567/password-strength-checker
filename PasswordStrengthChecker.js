function checkPasswordStrength() {
    const passwordInput = document.getElementById('password').value;
    //const strength = document.getElementById('strength').value;
    const strength = document.getElementById('strength');
    const image = document.getElementById('67');

    let alphabet = /[a-zA-Z]/;
    let number = /[0-9]/;
    let specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;

    let score = 0;


    if (passwordInput.length >= 8){
        score++;
    } 
    else if (passwordInput.length >= 12){
        score++;
    } 
    else if (alphabet.test(passwordInput)){
        score++;
    } 
    else if (number.test(passwordInput)){
        score++;
    } 
    else if (specialCharacter.test(passwordInput)){
        score++;
    } 
    else if (specialCharacter.test(passwordInput)){
        score++;
    }

    if (passwordInput.length === 0) {
        strength.textContent = '';
        strength.style.color = 'white';
    } else if (score <= 2) {
        strength.textContent = 'password strength: Weak';
        strength.style.color = 'red';
    } else if (score <= 4) {
        strength.textContent = 'password strength: Medium';
        strength.style.color = 'orange';
    } else {
        strength.textContent = 'password strength: Strong';
        strength.style.color = 'lightgreen';
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