// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => {
    navLinks.classList.toggle("show");
};

// Success / Error buttons
const statusMessage = document.getElementById("statusMessage");

document.getElementById("showSuccess").onclick = () => {
    statusMessage.style.color = "green";
    statusMessage.textContent = "Operation completed successfully!";
};

document.getElementById("showError").onclick = () => {
    statusMessage.style.color = "red";
    statusMessage.textContent = "Something went wrong!";
};

// Contact form
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const formError = document.getElementById("formError");
const formSuccess = document.getElementById("formSuccess");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nameInput.value.trim() === "") {
        formError.textContent = "Name is required";
        formSuccess.textContent = "";
    } else {
        formError.textContent = "";
        formSuccess.textContent = "Form submitted successfully!";
        nameInput.value = "";
    }
});

// Go to top
const goTop = document.getElementById("goTop");

window.onscroll = () => {
    goTop.style.display = window.scrollY > 200 ? "block" : "none";
};

goTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
