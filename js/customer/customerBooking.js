document.getElementById("bookingForm").addEventListener("input", calculateCost);

function calculateCost() {
    let baseCost = 100; // Fixed base cost (₹50)
    let weight = parseFloat(document.getElementById("parcelWeight").value) || 0;
    let deliverySpeed = document.getElementById("deliverySpeed").value;
    let packaging = document.getElementById("packaging").value;

    let weightCost = weight * 10; // ₹10 per kg
    let deliveryCost = deliverySpeed === "express" ? 100 : 0; // Express: ₹100 extra
    let packagingCost = 0;

    if (packaging === "eco") {
        packagingCost = 50; // Eco-friendly: ₹50
    } else if (packaging === "fragile") {
        packagingCost = 150; // Fragile Handling: ₹150
    }

     // Additional Services
     let insuranceCost = document.getElementById("insuranceOption").checked ? 200 : 0;
     let trackingCost = document.getElementById("trackingOption").checked ? 100 : 0;

    let totalCost = baseCost + weightCost + deliveryCost + packagingCost + insuranceCost + trackingCost;
    
    document.getElementById("totalCost").value = `₹${totalCost}`; // Display cost in ₹
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    function showError(id, message) {
        document.getElementById(id).textContent = message;
        isValid = false;
    }

    function clearError(id) {
        document.getElementById(id).textContent = "";
    }


    // Receiver Name Validation
    const receiverName = document.getElementById("receiverName").value.trim();
    if (receiverName.length < 3 || !/^[A-Za-z ]+$/.test(receiverName)) {
        showError("receiverNameError", "Enter a valid name (Only letters, min 3 characters)");
    } else {
        clearError("receiverNameError");
    }

    // Phone No Validation
    const mobilePattern = /^[0-9]{10}$/;
    const mobileNumber = document.getElementById("receiverContact").value;
    if (!mobilePattern.test(mobileNumber)) {
        showError("receiverContactError","Invalid mobile number. It must be exactly 10 digits");
    } else{
        clearError("receiverContactError")
    }

    // Pin Code Validation
    const receiverPin = document.getElementById("receiverPin").value.trim();
    if (!/^\d{6}$/.test(receiverPin)) {
        showError("receiverPinError", "Pin code must be 6 digits");
    } else {
        clearError("receiverPinError");
    }

    // Weight Validation
    const parcelWeight = document.getElementById("parcelWeight").value.trim();
    if (isNaN(parcelWeight) || parcelWeight <= 0.1) {
        showError("parcelWeightError", "Weight must be at least 0.1kg");
    } else {
        clearError("parcelWeightError");
    }

    // Pickup Date Validation
    // Pickup Date-Time Validation
    const pickupDateTimeInput = document.getElementById("pickupDateTime").value;
    const pickupDateTime = new Date(pickupDateTimeInput);
    const now = new Date();

    // Ensure the pickup is scheduled **at least 1 hour in the future**
    now.setMinutes(now.getMinutes() + 60);

    if (pickupDateTime < now) {
        showError("pickupDateError", "Pickup time must be at least 1 hour from now.");
    } else {
        clearError("pickupDateError");
    }

    if (isValid) {
        let receiverName = document.getElementById("receiverName").value.trim();
        let receiverAddress = document.getElementById("receiverAddress").value.trim();
        let receiverPin = document.getElementById("receiverPin").value.trim();
        let receiverMobile = document.getElementById("receiverMobile").value.trim();
        let parcelWeight = document.getElementById("parcelWeight").value.trim();
        let parcelContents = document.getElementById("parcelContents").value.trim();
        let deliverySpeed = document.getElementById("deliverySpeed").value;
        let packaging = document.getElementById("packaging").value;
        let pickupDateTime = document.getElementById("pickupDateTime").value;
        let totalCost = document.getElementById("totalCost").value.replace("₹", ""); // Remove ₹ symbol
    
        // Save details to Local Storage
        localStorage.setItem("receiverName", receiverName);
        localStorage.setItem("receiverAddress", receiverAddress);
        localStorage.setItem("receiverPin", receiverPin);
        localStorage.setItem("receiverMobile", receiverMobile);
        localStorage.setItem("parcelWeight", parcelWeight);
        localStorage.setItem("parcelContents", parcelContents);
        localStorage.setItem("deliverySpeed", deliverySpeed);
        localStorage.setItem("packaging", packaging);
        localStorage.setItem("pickupDateTime", pickupDateTime);
        localStorage.setItem("totalCost", totalCost);
        alert("Booking Successful!");
        window.location.href = "payment.html";
    }
});
