let inputs = document.getElementById("inpU");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please enter the task.");
    }
    else {
        let newele = document.createElement("ul");
        newele.innerHTML = `${inputs.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newele);
        inputs.value = "";
        newele.querySelector("i").addEventListener("click", remove);
        function remove() {
            newele.remove();
        }
    }
}