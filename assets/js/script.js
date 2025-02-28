document.addEventListener("DOMContentLoaded", function () {
    fetch("assets/components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Debugging: Confirm navbar was inserted
            console.log("Navbar loaded:", document.getElementById("navbar-container").innerHTML);

            // Ensure navbar elements exist before running setup
            requestAnimationFrame(setupHamburgerMenu);
        })
        .catch(error => console.error("Error loading navbar:", error));
});

function setupHamburgerMenu() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        console.log("Hamburger menu initialized successfully!");
    } else {
        console.error("Hamburger menu elements not found. Check if navbar loaded.");
    }
}
