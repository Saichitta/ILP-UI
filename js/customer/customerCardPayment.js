document.getElementById("makePaymentBtn").addEventListener("click", function () {
    let cardNumber = document.getElementById("cardNumber").value.trim();
    let cardHolder = document.getElementById("cardHolder").value.trim();
    let expiryDate = document.getElementById("expiryDate").value.trim();
    let cvv = document.getElementById("cvv").value.trim();

    let cardNumberError = document.getElementById("cardNumberError");
    let cardHolderError = document.getElementById("cardHolderError");
    let expiryDateError = document.getElementById("expiryDateError");
    let cvvError = document.getElementById("cvvError");

    let isValid = true;

    // Reset previous errors
    cardNumberError.textContent = "";
    cardHolderError.textContent = "";
    expiryDateError.textContent = "";
    cvvError.textContent = "";

    if (!/^\d{16}$/.test(cardNumber)) {
        cardNumberError.textContent = "Invalid Card Number! Must be 16 digits.";
        isValid = false;
    }

    if (cardHolder.length < 3) {
        cardHolderError.textContent = "Invalid Card Holder Name! Minimum 3 characters.";
        isValid = false;
    }

    if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiryDate)) {
        expiryDateError.textContent = "Invalid Expiry Date! Format MM/YY.";
        isValid = false;
    }

    if (!/^\d{3}$/.test(cvv)) {
        cvvError.textContent = "Invalid CVV! Must be 3 digits.";
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // Payment Success
    let bookingId = "BK" + Math.floor(Math.random() * 100000);
    localStorage.setItem("bookingId", bookingId);
    localStorage.setItem("paymentTime", new Date().toLocaleString());

    window.location.href = "customerInvoice.html";
});
