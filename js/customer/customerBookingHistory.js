document.addEventListener("DOMContentLoaded", function () {
    // Display username from localStorage
    let username = localStorage.getItem("username") || "Guest";
    document.getElementById("usernameDisplay").textContent = username;

    // Hardcoded booking data
    const bookings = [
        { customerID: "C001", bookingID: "123456789012", date: "2024-02-15", receiver: "John Doe", address: "Delhi, India", amount: "500", status: "Delivered" },
        { customerID: "C001", bookingID: "123456789013", date: "2024-02-18", receiver: "Alice Smith", address: "Mumbai, India", amount: "750", status: "In Transit" },
        { customerID: "C001", bookingID: "123456789014", date: "2024-02-20", receiver: "Bob Johnson", address: "Bangalore, India", amount: "650", status: "Pending" },
        { customerID: "C001", bookingID: "123456789015", date: "2024-02-22", receiver: "Chris Evans", address: "Kolkata, India", amount: "800", status: "Delivered" },
        { customerID: "C001", bookingID: "123456789016", date: "2024-02-25", receiver: "Emma Watson", address: "Chennai, India", amount: "900", status: "In Transit" },
        { customerID: "C001", bookingID: "123456789017", date: "2024-02-28", receiver: "Liam Neeson", address: "Pune, India", amount: "550", status: "Pending" }
    ];

    let currentPage = 0;
    const rowsPerPage = 3;

    function displayBookings() {
        const tableBody = document.getElementById("bookingHistoryTable");
        tableBody.innerHTML = "";

        let start = currentPage * rowsPerPage;
        let end = start + rowsPerPage;
        let paginatedData = bookings.slice(start, end);

        paginatedData.forEach(booking => {
            let row = `<tr>
                <td>${booking.customerID}</td>
                <td>${booking.bookingID}</td>
                <td>${booking.date}</td>
                <td>${booking.receiver}</td>
                <td>${booking.address}</td>
                <td>₹${booking.amount}</td>
                <td>${booking.status}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });

        document.getElementById("pageInfo").textContent = `Page ${currentPage + 1} of ${Math.ceil(bookings.length / rowsPerPage)}`;
        document.getElementById("prevPage").disabled = currentPage === 0;
        document.getElementById("nextPage").disabled = end >= bookings.length;
    }

    document.getElementById("prevPage").addEventListener("click", function () {
        if (currentPage > 0) {
            currentPage--;
            displayBookings();
        }
    });

    document.getElementById("nextPage").addEventListener("click", function () {
        if ((currentPage + 1) * rowsPerPage < bookings.length) {
            currentPage++;
            displayBookings();
        }
    });

    document.getElementById("logoutButton").addEventListener("click", function () {
        localStorage.removeItem("username");
        window.location.href = "login.html";
    });

    displayBookings();
});

