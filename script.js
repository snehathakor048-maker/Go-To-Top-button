// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => {
    navLinks.classList.toggle("show");
};

// Form Validation
const nameInput = document.getElementById("name");
const errorMsg = document.getElementById("errorMsg");
const submitBtn = document.getElementById("submitBtn");

nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() === "") {
        errorMsg.textContent = "Name is required";
        submitBtn.disabled = true;
    } else {
        errorMsg.textContent = "";
        submitBtn.disabled = false;
    }
});

// Go To Top
const goTop = document.getElementById("goTop");

window.onscroll = () => {
    if (window.scrollY > 200) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
};

goTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
