// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => {
    navLinks.classList.toggle("show");
};

// Success & Error buttons
const message = document.getElementById("message");

function showSuccess() {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
}

function showError() {
    message.textContent = "Something went wrong. Please try again.";
    message.style.color = "red";
}

// Go To Top
const goTop = document.getElementById("goTop");

window.onscroll = () => {
    goTop.style.display = window.scrollY > 200 ? "block" : "none";
};

goTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
