function saveUser(email, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
}

function findUser(email) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.find(user => user.email === email);
}

function handleSignup(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (findUser(email)) {
        alert("User already exists!");
        return;
    }

    saveUser(email, password);
    alert("Signup successful!");
    window.location.href = "login.html"; 
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = findUser(email);

    if (user && user.password === password) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; 
    } else {
        alert("Invalid email or password!");
    }
}

function handleForgotPassword(event) {
    event.preventDefault();
    const email = document.getElementById("mail").value;
    const newPassword = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(user => user.email === email);

    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Password reset successful!");
        window.location.href = "login.html"; 
    } else {
        alert("User not found!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector("#signupForm");
    const loginForm = document.querySelector("#loginForm");
    const forgotPasswordForm = document.querySelector("#forgotPasswordForm");

    if (signupForm) {
        signupForm.addEventListener("submit", handleSignup);
    }

    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }

    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", handleForgotPassword);
    }
});
