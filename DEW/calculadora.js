const operacion = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

switch (operacion) {
  case "sumar":
    console.log(`Resultado: ${num1 + num2}`);
    break;
  case "restar":
    console.log(`Resultado: ${num1 - num2}`);
    break;
  case "mulgit":
    console.log(`Resultado: ${num1 * num2}`);
    break;
  case "div":
    console.log(`Resultado: ${num1 / num2}`);
    break;
  default:
    console.log("Operación no válida");
}
