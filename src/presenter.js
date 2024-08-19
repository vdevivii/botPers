import respuesta from './bot.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#bot-form");
    const nameInput = document.querySelector("#name-input");
    const responseDiv = document.querySelector("#resp-div");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = nameInput.value.trim(); // Obtenemos el valor del input y eliminamos los espacios en blanco

        if (name) {
            responseDiv.innerHTML = `<p>${respuesta(name)}</p>`;
        } else {
            responseDiv.innerHTML = "<p>Por favor, introduce tu nombre.</p>";
        }
    });
});
