// Login Form

document.addEventListener("DOMContentLoaded", function () {
    const roleDropdown = document.getElementById("role");
    const registerMessage = document.getElementById("register-message");

    // Ensure the message exists before adding event listener
    if (roleDropdown && registerMessage) {
        roleDropdown.addEventListener("change", function () {
            registerMessage.style.display = this.value === "customer" ? "block" : "none";
        });
    }
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const role = document.getElementById("role").value;
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("error-message");

            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,30}$/;

            if (!role) {
                errorMessage.textContent = "Please select a role.";
                return;
            }

            if (username.length < 5 || username.length > 20) {
                errorMessage.textContent = "User ID must be between 5 and 20 characters.";
                return;
            }
            if (!passwordPattern.test(password)) {
                errorMessage.textContent = "Password must contain at least one uppercase, one lowercase, and one special character.";
                return;
            }

            localStorage.setItem("username", username);
            localStorage.setItem("role", role);

            errorMessage.textContent = "";

            if (role === "customer") {
                window.location.href = "customer/customerHomepage.html";
            } else if (role === "officer") {
                window.location.href = "officer/officerHomepage.html";
            }
        });
    }

    // ✅ REGISTRATION FORM (Check if it exists before adding event listener)
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get values from form
            const customerName = document.getElementById("customerName").value;
            const email = document.getElementById("email").value;
            const userId = document.getElementById("userId").value;
            const mobileNumber = document.getElementById("mobileNumber").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const successMessage = document.getElementById("success-message");
            const passwordErrorMessage = document.getElementById("password-error-message");
            const errorMessage = document.getElementById("error-message");


            passwordErrorMessage.textContent = "";
            errorMessage.textContent = "";
            successMessage.textContent = "";

            // Password Validation
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,30}$/;
            const emailPattern = /^[a-zA-Z0-9._%+-]+(?:\.[a-zA-Z0-9._%+-]+)*@[a-zA-Z0-9.-]{4,}\.[a-zA-Z]{2,}$/;

            if (!emailPattern.test(email)) {
                errorMessage.textContent = "Invalid email format. Please check your email.";
                return;
            }
            
            // Mobile Number Validation (Only Numbers, 10 Digits)
            const mobilePattern = /^[0-9]{10}$/;
            if (!mobilePattern.test(mobileNumber)) {
                errorMessage.textContent = "Invalid mobile number. It must be exactly 10 digits";
                return;
            }
    


            if (!passwordPattern.test(password)) {
                // alert("Password must contain at least one uppercase, one lowercase, and one special character.");
                passwordErrorMessage.textContent = "Password must contain at least one uppercase, one lowercase, and one special character.";
                return;
            }

            if (password !== confirmPassword) {
                passwordErrorMessage.textContent = "Passwords do not match."
                return;
            }

            // Generate Random Username
            const randomUsername = userId + Math.floor(Math.random() * 1000);

            // Display Success Message
            successMessage.innerHTML = `🎉 Consumer Registration Successful! <br> 
                <b>Username:</b> ${randomUsername} <br> 
                <b>Name:</b> ${customerName} <br> 
                <b>Email:</b> ${email}`;
            successMessage.style.color = "green";
        });
    }
});
