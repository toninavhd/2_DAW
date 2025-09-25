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
  case "mul":
    console.log(`Resultado: ${num1 * num2}`);
    break;
  case "div":
    console.log(`Resultado: ${num1 / num2}`);
    break;
  case "modulo":
    console.log(`Resultado: ${num1 % num2}`);
    break;
  case "potencia":
    console.log(`Resultado: ${num1 ** num2}`);
    break;
  case "raiz":
    if (num1 > 0 || num2 > 0) {
      console.log(`Resultado: ${num1 ** (1 / num2)}`);
      break;
    } else {
      console.log("Usa números mayores que 0");
      break;
    }

  default:
    console.log("Operación no válida");
}
