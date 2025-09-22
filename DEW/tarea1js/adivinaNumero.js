const prompt = require("prompt-sync")();

const numeroSecreto = Math.floor(Math.random() * 50) + 1;
const intentos = 5;

function jugar() {
  const respuesta = parseInt(prompt("Adivina el número entre 1 y 50: "));

  if (respuesta === numeroSecreto) {
    alert("¡Felicidades! Has adivinado el número.");
    return; // Finaliza el juego
  } else if (respuesta > numeroSecreto) {
    alert("El número secreto es menor.");
  } else {
    alert("El número secreto es mayor.");
  }
  intentos--;
}
