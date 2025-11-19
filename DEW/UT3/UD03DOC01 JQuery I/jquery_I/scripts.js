function resolverEjercicios() {
  // 1.- Usa jQuery para seleccionar todos los elementos del documento y aplicarles un borde punteado gris claro.
  // 2.- Cambia el color del texto del párrafo con ID intro a verde.
  // 3. Subraya todos los elementos que tengan la clase misterio.
  // 4. Resalta todos los elementos que tengan el atributo data-personaje.
  // 5. Modifica el texto del personaje con data-personaje="Dipper" para indicar que está en la biblioteca.
  // 6. Cambia la fuente de todos los elementos <p> a Georgia.
  $("p").css("font-family","Times New Roman");
  // 7. Cambia el color del texto a rojo de los elementos con el atributo data-enemigo.
  // 8. Resalta los elementos cuyo atributo data-enemigo tenga el valor "true".
  // 9. Aplica cursiva a los elementos con data-personaje distinto de "Mabel".
  $("[data-personaje].not[data-personaje!='Mabel']").css("font-style","italic");
  // 10. Cambia el fondo de los elementos cuyo atributo data-lugar comience con "caba".
  // 11. Muestra (fadeIn) los elementos cuyo atributo data-rol termine en "final".
  // 12. Aplica un borde rojo grueso a los elementos cuyo atributo title contenga la palabra "villano".
}

function init() {
  // Cuando se pulse el boton con id="btn-ejecutar" se ejecutaran las siguientes acciones
  $("#btn-ejecutar").on("click", resolverEjercicios);
}

$(function () {
  init();
});
