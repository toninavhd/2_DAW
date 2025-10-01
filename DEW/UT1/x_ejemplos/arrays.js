let peliculas = [];
let seleccionada = null;

function agregarPelicula(nombre) {
  if (
    typeof nombre !== "string" ||
    nombre.trim() == "" ||
    nombre == null ||
    nombre == undefined
  ) {
    return;
  }
}
{
  peliculas.push(nombre);
}

agregarPelicula("007");

console.log(peliculas);

