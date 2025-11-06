let numero;
do {
  const entrada = prompt("Ingresa un número entero positivo:");

  numero = (entrada);

  if (isNaN(numero) || numero <= 0) {
    alert("Por favor, ingresa un número entero positivo válido.");
  }
} while (isNaN(numero) || numero <= 0);

console.log("El número ingresado es:", numero);