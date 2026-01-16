
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});


const nameInput = document.getElementById("name");
const errorMsg = document.getElementById("errorMsg");
const submitBtn = document.getElementById("submitBtn");

if (nameInput) {
    nameInput.addEventListener("input", () => {
        if (nameInput.value.trim() === "") {
            errorMsg.textContent = "Name is required";
            submitBtn.disabled = true;
        } else {
            errorMsg.textContent = "";
            submitBtn.disabled = false;
        }
    });
}


const goTop = document.getElementById("goTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
});

goTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
