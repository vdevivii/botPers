document.getElementById('bot-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name-input').value.trim();
  const age = parseInt(document.getElementById('age-input').value.trim(), 10);
  const gender = document.getElementById('gender-input').value.trim().toUpperCase();
  const responseDiv = document.getElementById('resp-div');

  let greeting;

  if (age >= 20) {
    if (gender === "M") {
      greeting = `Hola, señor ${name}`;
    } else if (gender === "F") {
      greeting = `Hola, señora ${name}`;
    } else {
      greeting = "Género no reconocido, por favor use M o F.";
    }
  } else {
    if (gender === "M") {
      greeting = `Hola, señorito ${name}`;
    } else if (gender === "F") {
      greeting = `Hola, señorita ${name}`;
    } else {
      greeting = "Género no reconocido, por favor use M o F.";
    }
  }

  responseDiv.textContent = greeting;
});
