// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => {
    navLinks.classList.toggle("show");
};

// Form Validation
const nameInput = document.getElementById("name");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");

nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() === "") {
        errorMsg.textContent = "Name is required";
        successMsg.textContent = "";
        submitBtn.disabled = true;
    } else {
        errorMsg.textContent = "";
        submitBtn.disabled = false;
    }
});

submitBtn.onclick = (e) => {
    e.preventDefault();
    successMsg.textContent = "Form submitted successfully!";
};

resetBtn.onclick = () => {
    nameInput.value = "";
    errorMsg.textContent = "";
    successMsg.textContent = "";
    submitBtn.disabled = true;
};

// Go Top
const goTop = document.getElementById("goTop");

window.onscroll = () => {
    goTop.style.display = window.scrollY > 200 ? "block" : "none";
};

goTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
