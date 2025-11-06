//Crea un array numeros = [3,7,2,9,5]. Recorre con for y muestra cada índice y valor en formato: i= <i> v=<valor>.


//Suma todos los elementos de numeros con for y muestra el total.

const numeros = [3,7,2,9,5]

let suma = 0;
for(let i=0;i<numeros.length;i++) {
    suma = suma + numeros[i]   
};
console.log(suma);

// Genera un nuevo array pares con los valores pares de numeros sin usar filter. Usa for y push.

//2 while

let num = 5;
let result = 1;
while (num > 0){
    result * num;
    console.log('número: ${num}');
    num -= 1;
    console.log('resultado: ${result}')
};

//3 while

let rndnumber = 0;
let counter = 0;

while (rndnumber != 7) {
    rndnumber = Math.floor(Math.random() * 10 + 1);
    counter++;
}
console.log(counter)


// while factorial

fact = 1;
n = 6

while (n = 0){
    fact = fact*n
    n --;
};

// ------------------------ Do...while ------------------------------


//Pide un número con prompt (o simúlalo con una variable). Repite hasta que sea un entero positivo. Usa do...while.

let numero;
do {
  const entrada = prompt("Ingresa un número entero positivo:");

  numero = (entrada);

  if (isNaN(numero) || numero <= 0) {
    alert("Por favor, ingresa un número entero positivo válido.");
  }
} while (isNaN(numero) || numero <= 0);

console.log("El número ingresado es:", numero);


//2 Simula un menú simple: muestra opciones 1–3 y sale al elegir 0. Usa do...while para repetir hasta 0.

let opcion = 0;

do {
  console.log("--- Menú ---");
  console.log("1. Opción 1");
  console.log("2. Opción 2");
  console.log("3. Opción 3");
  console.log("0. Salir");
  console.log("------------");

  opcion = Math.floor(Math.random() * 4);

  switch (opcion) {
    case 1:
      console.log("Has elegido la Opción 1");
      break;
    case 2:
      console.log("Has elegido la Opción 2");
      break;
    case 3:
      console.log("Has elegido la Opción 3");
      break;
    case 0:
      console.log("Saliendo del menú...");
      break;
    default:
      console.log("Opción no válida.");
  }
  console.log("\n"); 

} while (opcion !== 0);

/**
 * Simula el lanzamiento de un dado de 6 caras hasta que salga un 6.
 * Muestra cada tirada y el número total de tiradas al final.
 */
function simularTiradaDado() {
    let tirada;
    let totalTiradas = 0;

    console.log("Comenzando la simulación de tiradas de dado...");

    do {
        tirada = Math.floor(Math.random() * 6) + 1;
        totalTiradas++;

        console.log(`Tirada ${totalTiradas}: Salió un ${tirada}`);

    } while (tirada !== 6);

    console.log(`\n¡Finalmente salió un 6!`);
    console.log(`Número total de tiradas requeridas: ${totalTiradas}`);
}

simularTiradaDado();
