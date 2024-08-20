document.getElementById('bot-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name-input').value.trim();
  const age = parseInt(document.getElementById('age-input').value.trim(), 10);
  const gender = document.getElementById('gender-input').value.trim().toUpperCase();
  const leng = document.getElementById('leng-input').value.trim().toUpperCase();

  const responseDiv = document.getElementById('resp-div');

  let greeting;

  if(leng == "SP")
    {
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
}
  else if (leng == "ENG")
  {

    if (age >= 20) {
      if (gender === "M") {
        greeting = `Hello, sir ${name}`;
      } else if (gender === "F") {
        greeting = `Hello, madam ${name}`;
      } else {
        greeting = "Gender not found, please use M or F.";
      }
    } else {
      if (gender === "M") {
        greeting = `Hi, bro ${name}`;
      } else if (gender === "F") {
        greeting = `Hi, lady ${name}`;
      } else {
        greeting = "Gender not found, please use M or F.";
      }

  }
}


  responseDiv.textContent = greeting;

});
