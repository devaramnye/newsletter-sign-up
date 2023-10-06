const email = document.getElementById("mail");
const form = document.getElementById("form");
const button = document.querySelector(".buttontwo");

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
    } else if (email.validity.valid) {
        event.preventDefault();
        document.querySelector("#header").innerHTML = "";
        document.querySelector("#header").innerHTML = "<img class='success' src='./assets/images/icon-success.svg' alt='' />";
        document.querySelector(".main__h2").textContent = "Thanks for subscribing!";
        document.querySelector("ul").classList.add("hidden");
        document.querySelector(".buttonone").classList.add("hidden");
        document.querySelector(".buttontwo").classList.remove("hidden");
        document.getElementById("canvas").style['flex-direction'] = "column";
        document.getElementById("canvas").style['align-items'] = "flex-start";
        document.getElementById("canvas").style['max-width'] = "400px";
        document.querySelector("form").classList.add("hidden");
        document.querySelector(".main__p").classList.add("hidden");
        document.querySelector(".main__pp").classList.remove("hidden")
        document.querySelector(".email-mess").textContent = email.value;
    }
});

button.addEventListener("click", (event) => {
    location.reload();
})