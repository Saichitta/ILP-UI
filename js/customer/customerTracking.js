document.getElementById("trackButton").addEventListener("click", function () {
    let bookingId = document.getElementById("bookingId").value.trim();
    let bookingIdError = document.getElementById("bookingIdError");
    let trackingResult = document.getElementById("trackingResult");

    // Clear previous error
    bookingIdError.textContent = "";

    // Validate Booking ID (Must be exactly 12 digits)
    if (!/^\d{12}$/.test(bookingId)) {
        bookingIdError.textContent = "Booking ID must be exactly 12 digits!";
        trackingResult.classList.add("hidden");
        return;
    }

    // Dummy Data (Replace with dynamic data later)
    let trackingData = {
        "123456789012": { status: "In Transit", deliveryDate: "2025-02-25" },
        "234567890123": { status: "Delivered", deliveryDate: "2025-02-18" },
        "345678901234": { status: "Pending Pickup", deliveryDate: "TBD" }
    };

    if (trackingData[bookingId]) {
        document.getElementById("trackBookingId").textContent = bookingId;
        document.getElementById("trackStatus").textContent = trackingData[bookingId].status;
        document.getElementById("trackDeliveryDate").textContent = trackingData[bookingId].deliveryDate;
        trackingResult.classList.remove("hidden");
    } else {
        bookingIdError.textContent = "No tracking information found!";
        trackingResult.classList.add("hidden");
    }
});
