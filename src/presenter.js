import { respuesta, handleNameInput, handleGenderInput } from './bot.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#bot-form");
    const nameSection = document.querySelector("#name-section");
    const genderSection = document.querySelector("#gender-section");
    const nameInput = document.querySelector("#name-input");
    const genderInput = document.querySelector("#gender-input");
    const responseDiv = document.querySelector("#resp-div");


    const form2 = document.querySelector("#bot2-form");
    const responseDivG = document.querySelector("#respgender-div");

    let userName = '';

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (nameSection.style.display !== 'none') {
            userName = nameInput.value.trim();
            if (userName) {
                responseDiv.innerHTML = `<p>${handleNameInput(userName)}</p>`;
                nameSection.style.display = 'none';
                genderSection.style.display = 'block';
            } else {
                responseDiv.innerHTML = "<p>Por favor, introduce tu nombre.</p>";
            }
        
          }
    });


form2.addEventListener("submit", (event) => {
if (genderSection.style.display !== 'none') {
  const gender = genderInput.value.trim().toUpperCase();
  if (gender === 'M' || gender === 'H') {
    responseDivG.innerHTML = `<p>${handleGenderInput(userName, gender)}</p>`;
  } else {
    responseDivG.innerHTML = "<p>Por favor, introduce un género válido (M o H).</p>";
  }
}
});
});