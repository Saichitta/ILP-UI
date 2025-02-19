document.addEventListener("DOMContentLoaded", function () {
    // Fetch the logged-in user's name from localStorage
    const username = localStorage.getItem("username") || "Customer"; 
    document.getElementById("welcomeUser").textContent = `Welcome, ${username}`;

    // Logout button functionality
    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.clear();  // Clear user data
        window.location.href = "../login.html"; // Redirect to login page
    });
});
