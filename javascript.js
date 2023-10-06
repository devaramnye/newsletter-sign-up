const email = document.getElementById("mail");
const form = document.getElementById("form");

email.addEventListener("input", (event) => {
    if (!email.validity.valid) {
        document.getElementById("error").textContent = "Valid email required";
    } else {
        document.getElementById("error").textContent = "";
    }
});

form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        event.preventDefault();
    }
});