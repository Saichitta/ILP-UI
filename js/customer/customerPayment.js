document.getElementById("backHomeBtn").addEventListener("click", function () {
    window.location.href = "../../pages/customer/customerBooking.html";
});

   // Pay Now Button Redirect
document.getElementById("payNowBtn").addEventListener("click", function () {
    window.location.href = "../../pages/customer/customerCardPayment.html";
});
document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username") || "Customer"; 
    document.getElementById("welcomeUser").textContent = `Welcome, ${username}`;

    let billAmount = localStorage.getItem("totalCost");
    document.getElementById("billAmount").value = `₹${billAmount}`;
    console.log("username")

    // Logout Button Functionality
    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.clear();
        window.location.href = "index.html";
    });

 

    // Back to Home Button Redirect
   
});