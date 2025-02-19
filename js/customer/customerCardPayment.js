document.getElementById("makePaymentBtn").addEventListener("click", function () {
    let cardNumber = document.getElementById("cardNumber").value.trim();
    let cardHolder = document.getElementById("cardHolder").value.trim();
    let expiryDate = document.getElementById("expiryDate").value.trim();
    let cvv = document.getElementById("cvv").value.trim();

    if (!/^\d{16}$/.test(cardNumber)) {
        alert("Invalid Card Number! Must be 16 digits.");
        return;
    }

    if (cardHolder.length < 3) {
        alert("Invalid Card Holder Name! Minimum 3 characters.");
        return;
    }

    if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiryDate)) {
        alert("Invalid Expiry Date! Format MM/YY.");
        return;
    }

    if (!/^\d{3}$/.test(cvv)) {
        alert("Invalid CVV! Must be 3 digits.");
        return;
    }

    let bookingId = "BK" + Math.floor(Math.random() * 100000);
    alert(`Payment Successful! Booking ID: ${bookingId}`);
    
    localStorage.setItem("bookingId", bookingId);
    localStorage.setItem("paymentTime", new Date().toLocaleString());

    window.location.href = "invoice.html";
});
