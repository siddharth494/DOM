// Greeting Button
document.getElementById("greetBtn").addEventListener("click", function () {
    let name = document.getElementById("nameInput").value;
    let greeting = document.getElementById("greeting");

    if (name.trim() === "") {
        greeting.innerText = "Hello";
    } else {
        greeting.innerText = "Hello, " + name;
    }
});

// Box Color Change
let boxes = document.querySelectorAll(".box");

boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        let color = box.innerText.toLowerCase();
        box.style.backgroundColor = color;
        box.style.color = "white";
    });
});