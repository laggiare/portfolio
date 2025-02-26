document.addEventListener("DOMContentLoaded", function () {
    fetch("/assets/components/navbar.html")  // Add leading `/`
        .then(response => {
            if (!response.ok) {
                throw new Error("Navbar not found.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});
