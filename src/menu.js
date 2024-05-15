document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    mobileMenuBtn.addEventListener("click", function() {
        mobileMenu.classList.toggle("hidden");
    });
});
