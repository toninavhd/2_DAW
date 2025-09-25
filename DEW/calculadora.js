// calculadora
//Operaciones nuevas:
// Módulo (%)
// Potencia (a^b)
// Raíz n (controlar no hacer raíces de números negativos)

const operacion = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

let historialOperaciones = [];
let opr = [];
let fecha;
switch (operacion) {
  case "sumar":
    console.log(`Resultado: ${num1 + num2}`);
    opr.push(num1);
    opr.push(num2);
    opr.push(operacion);
    fecha = Date().toString();
    opr.push(fecha);
    historialOperaciones.push(opr);
    break;
  case "restar":
    console.log(`Resultado: ${num1 - num2}`);
    opr.push(num1);
    opr.push(num2);
    opr.push(operacion);
    fecha = Date().toString();
    opr.push(fecha);
    historialOperaciones.push(opr);
    break;

  case "mul":
    console.log(`Resultado: ${num1 * num2}`);
    opr.push(num1);
    opr.push(num2);
    opr.push(operacion);
    fecha = Date().toString();
    opr.push(fecha);
    historialOperaciones.push(opr);
    break;

  case "div":
    console.log(`Resultado: ${num1 / num2}`);
    opr.push(num1);
    opr.push(num2);
    opr.push(operacion);
    fecha = Date().toString();
    opr.push(fecha);
    historialOperaciones.push(opr);
    break;

  case "modulo":
    console.log(`Resultado: ${num1 % num2}`);
    opr.push(num1);
    opr.push(num2);
    opr.push(operacion);
    fecha = Date().toString();
    opr.push(fecha);
    historialOperaciones.push(opr);
    break;

  case "potencia":
    console.log(`Resultado: ${num1 ** num2}`);
    opr.push(num1);
    opr.push(num2);
    opr.push(operacion);
    fecha = Date().toString();
    opr.push(fecha);
    historialOperaciones.push(opr);
    break;

  case "raiz":
    if (num1 > 0 || num2 > 0) {
      console.log(`Resultado: ${num1 ** (1 / num2)}`);
      opr.push(num1);
      opr.push(num2);
      opr.push(operacion);
      fecha = Date().toString();
      opr.push(fecha);
      historialOperaciones.push(opr);
      break;
    } else {
      console.log("Usa números mayores que 0");
      break;
    }

  default:
    console.log("Operación no válida");
}

// Guarda las operaciones con fecha, la entrada y resultado.
// Desde el menú podemos listar el historial.
// Desde el menú podemos borrar el historial.
// El historial se borra al cerrar la aplicación.
console.log(historialOperaciones);
